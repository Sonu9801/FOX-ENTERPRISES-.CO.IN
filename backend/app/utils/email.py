import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from app.core.config import settings

def send_contact_email(name: str, email: str, message: str, phone: str = "N/A", company: str = "N/A"):
    """
    Sends an email using Gmail SMTP.
    """
    if not settings.SMTP_USER or not settings.SMTP_PASSWORD or not settings.EMAILS_TO:
        print("Email configuration incomplete. Skipping email send.")
        return False

    try:
        # Create message container
        msg = MIMEMultipart()
        msg['From'] = f"{settings.EMAILS_FROM_NAME} <{settings.SMTP_USER}>"
        msg['To'] = settings.EMAILS_TO
        msg['Subject'] = f"New Contact Request from {name}"

        # Create the body
        body = f"""
        New Contact Submission:
        
        Name: {name}
        Email: {email}
        Phone: {phone}
        Company: {company}
        
        Message:
        {message}
        
        ---
        Sent from Fox Enterprises Website Backend
        """
        msg.attach(MIMEText(body, 'plain'))

        # Setup SMTP Server
        server = smtplib.SMTP(settings.SMTP_HOST, settings.SMTP_PORT)
        server.starttls()  # Secure the connection
        server.login(settings.SMTP_USER, settings.SMTP_PASSWORD)
        
        # Send Email
        server.send_message(msg)
        server.quit()
        
        return True
    except Exception as e:
        print(f"Failed to send email: {e}")
        return False
