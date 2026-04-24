from fastapi import APIRouter
from app.api.v1.endpoints import health, contact

api_router = APIRouter()
api_router.include_router(health.router, prefix="/health", tags=["health"])
api_router.include_router(contact.router, prefix="/contact", tags=["contact"])
