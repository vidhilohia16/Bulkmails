# 📧 Bulkmails — Bulk Email Sender

A full-stack web application to send personalized bulk emails 
to 500+ contacts using Gmail API with Google OAuth2 authentication.

🔗 Live: https://bulkmails-five.vercel.app
🎥 Demo: [Watch here](https://www.dropbox.com/scl/fi/z5gywv20bliq3dsbycj1f/Bulkmails-Full-Stack-Web-Application.mp4?rlkey=c4y3y6fcrqi1pd1l9tyrm21o6&st=2irrd3bp&dl=0)



## ✨ Features

-  Google OAuth2 login — send emails directly from your Gmail
-  Send personalized emails to 500+ contacts in one go
-  File attachment support (resumes, PDFs) via MIME multipart encoding
-  Excel column mapping for dynamic subject and body templating
-  Redis (Upstash) to persist OAuth2 refresh tokens across sessions
-  Stateless backend authentication with Gmail API



## 🛠 Tech Stack

|      Frontend        |      Backend      | Tools |

| React, MUI, Bootstrap | Node.js, Express | Gmail API |
| Vercel (deployed) | Render (deployed) | Redis (Upstash) |

## 🚀 Getting Started

### Prerequisites
- Node.js v18+
- Google Cloud Console project with Gmail API enabled
- Upstash Redis account

### Installation

# Clone the repo
git clone https://github.com/vidhilohia16/Bulkmails

# Install frontend
cd client
npm install

# Install backend
cd server
npm install

### Run Locally
# Backend
cd server && npm start

# Frontend
cd client && npm start


## 👩‍💻 Author
Vidhi Lohia
[LinkedIn](https://www.linkedin.com/in/vidhi-lohia1/) | [GitHub](https://github.com/vidhilohia16)
