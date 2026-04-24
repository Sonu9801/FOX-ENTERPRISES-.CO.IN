from fastapi import APIRouter, HTTPException, status
from motor.motor_asyncio import AsyncIOMotorClient
from bson import ObjectId
from typing import List
from datetime import datetime

from app.schemas.contact import ContactCreate
from app.core.config import settings
import json
import os
from pathlib import Path
from app.utils.email import send_contact_email

router = APIRouter()

# Initialize MongoDB client
client = AsyncIOMotorClient(settings.MONGODB_URL)
db = client[settings.DATABASE_NAME]

@router.post("/", status_code=status.HTTP_201_CREATED)
async def create_contact_message(contact: ContactCreate):
    contact_data = contact.model_dump()
    contact_data["created_at"] = datetime.utcnow().isoformat()
    
    # Send email notification (async not strictly needed here for simple cases)
    email_sent = send_contact_email(
        name=contact_data["name"],
        email=contact_data["email"],
        phone=contact_data.get("phone", "N/A"),
        company=contact_data.get("company", "N/A"),
        message=contact_data["message"]
    )
    
    try:
        # Try MongoDB
        result = await db[settings.COLLECTION_NAME].insert_one(contact_data.copy())
        if result.inserted_id:
            return {
                "status": "success", 
                "message": "Saved to MongoDB", 
                "email_notification": "sent" if email_sent else "failed"
            }
    except Exception as mongo_err:
        print(f"MongoDB unavailable, falling back to JSON: {mongo_err}")
        try:
            file_path = Path("contacts.json")
            contacts = []
            if file_path.exists():
                with open(file_path, "r") as f:
                    try:
                        contacts = json.load(f)
                    except:
                        contacts = []
            
            contacts.append(contact_data)
            with open(file_path, "w") as f:
                json.dump(contacts, f, indent=4)
            
            return {
                "status": "success", 
                "message": "Saved to JSON (MongoDB unavailable)", 
                "email_notification": "sent" if email_sent else "failed"
            }
        except Exception as json_err:
            raise HTTPException(
                status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
                detail=f"Both MongoDB and JSON fallback failed: {str(json_err)}"
            )

@router.post("/send-email")
async def send_email_manual(contact: ContactCreate):
    """
    Explicit endpoint to just send an email without saving to DB.
    """
    sent = send_contact_email(
        name=contact.name,
        email=contact.email,
        phone=contact.phone or "N/A",
        company=contact.company or "N/A",
        message=contact.message
    )
    if sent:
        return {"status": "success", "message": "Email sent successfully"}
    else:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Failed to send email. Check backend logs."
        )

@router.get("/", response_model=List[dict])
async def get_all_contacts():
    try:
        contacts = []
        cursor = db[settings.COLLECTION_NAME].find().sort("created_at", -1)
        async for document in cursor:
            document["id"] = str(document["_id"])
            del document["_id"]
            contacts.append(document)
        return contacts
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=str(e)
        )

@router.delete("/{contact_id}", status_code=status.HTTP_200_OK)
async def delete_contact(contact_id: str):
    try:
        if not ObjectId.is_valid(contact_id):
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail="Invalid contact ID"
            )
        
        result = await db[settings.COLLECTION_NAME].delete_one({"_id": ObjectId(contact_id)})
        
        if result.deleted_count == 1:
            return {"status": "success", "message": "Contact deleted successfully"}
        
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Contact not found"
        )
    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=str(e)
        )
