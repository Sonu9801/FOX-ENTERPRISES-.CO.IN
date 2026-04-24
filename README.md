# Fox Enterprises - EV & Commercial Cargo Box Manufacturing

A premium, full-stack web application for Fox Enterprises, specializing in high-quality cargo box manufacturing for electric and commercial vehicles. Built with **Next.js 15**, **FastAPI**, and **MongoDB**.

---

## 🚀 Features

- **Modern UI/UX**: Cinematic industrial design with glassmorphism, responsive layouts, and modern typography (Space Grotesk & Satoshi).
- **Manufacturing Showcase**: Dynamic "Our Manufacturing Process" section with high-fidelity production images.
- **Integrated Contact System**: 
  - Real-time form validation.
  - **SMTP Email Notifications**: Automatically sends an email to administration upon submission.
  - **Dual Database Strategy**: Saves to **MongoDB** with an automatic **JSON File Fallback** if the database server is offline.
- **Premium Branding**: Custom-designed 3D metallic SVG logo with copper/bronze finish and blue-to-green corporate wordmark.

---

## 🛠️ Technology Stack

### Frontend
- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS & Lucide React
- **Animations**: Framer Motion (Motion.js)
- **Components**: Radix UI / Shadcn UI

### Backend
- **Framework**: FastAPI (Python)
- **Database**: MongoDB (via Motor/Async Drivers)
- **Email**: SMTP (Gmail)
- **Settings**: Pydantic v2 (Settings Settings Management)

---

## ⚙️ Setup & Installation

### 1. Backend Setup
1. Navigate to the backend folder:
   ```bash
   cd backend
   ```
2. Create and activate a virtual environment:
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```
3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```
4. Configure `.env`:
   - Copy the values from the provided `.env` template.
   - Set your **Gmail App Password** for SMTP functionality.
5. Run the server:
   ```bash
   uvicorn main:app --reload
   ```

### 2. Frontend Setup
1. Navigate to the frontend folder:
   ```bash
   cd frontend
   ```
2. Install dependencies (Requires [pnpm](https://pnpm.io/)):
   ```bash
   pnpm install
   ```
3. Configure `.env.local`:
   - Ensure `NEXT_PUBLIC_API_URL` points to your backend (default: `http://localhost:8000/api/v1`).
4. Run in development mode:
   ```bash
   pnpm dev
   ```

---

## 📧 Email Configuration
For the contact form to send emails, you must:
1. Enable 2FA on your Google Account.
2. Generate an **App Password** at [Google Security](https://myaccount.google.com/apppasswords).
3. Update the following variables in `backend/.env`:
   - `SMTP_USER`
   - `SMTP_PASSWORD`
   - `EMAILS_TO`

---

## 📍 Project Structure

```bash
fox-enterprises/
├── frontend/          # Next.js App
│   ├── src/
│   │   ├── components/ # Core UI & Sections
│   │   └── app/        # Pages & Layouts
├── backend/           # FastAPI App
│   ├── app/
│   │   ├── api/        # Routes & Controllers
│   │   ├── utils/      # Email & Logic
│   │   └── schemas/    # Pydantic Models
│   └── main.py         # Entry point
```

Created by **Fox Enterprises Engineering**. 
Location: Faridabad, Haryana, India.
