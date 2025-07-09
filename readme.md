<h1 align="center">🔐 Auth API</h1>
<p align="center">
  A modern and secure authentication system built with <strong>Node.js</strong>, <strong>Express.js</strong>, <strong>MongoDB</strong>, and <strong>JWT</strong>. Includes email verification, login, logout, and password reset functionality.
</p>

---

## 🚀 Features

- ✅ User Registration with Email Verification
- 🔐 Secure Login with JWT Token
- 🍪 Cookie-based Authentication (HTTPOnly)
- 🔁 Password Reset via Email
- 🚫 Token Expiry and Blacklisting Support
- 🧪 Modular Code Structure with Error Handling

---

## 🛠️ Tech Stack

<p align="left">
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" />
  <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" />
  <img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" />
  <img src="https://img.shields.io/badge/Mongoose-880000?style=for-the-badge&logoColor=white" />
  <img src="https://img.shields.io/badge/JSON%20Web%20Tokens-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white" />
  <img src="https://img.shields.io/badge/Mailtrap-191A1B?style=for-the-badge&logo=mailtrap&logoColor=white" />
  <img src="https://img.shields.io/badge/Dotenv-000000?style=for-the-badge&logo=dotenv&logoColor=white" />
</p>

---

## 📂 Folder Structure

auth-project/
├── config/
│ └── db.js
├── controllers/
│ └── authController.js
├── mailtrap/
│ ├── mailtrap.config.js
│ └── emailTemplates.js
├── middleware/
│ └── authMiddleware.js
├── models/
│ └── User.js
├── routes/
│ └── authRoutes.js
├── utils/
│ └── tokenService.js
├── .env
├── server.js
├── package.json
└── README.md


---

## ⚙️ Environment Variables

Create a `.env` file in the root directory and add the following variables:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
JWT_EXPIRES_IN=1d
MAILTRAP_TOKEN=your_mailtrap_api_token
MAILTRAP_SENDER_EMAIL=verified_sender@example.com
BASE_URL=http://localhost:5000

💻 Installation & Setup

# 1. Clone the repository
git clone https://github.com/your-username/auth-project.git
cd auth-project

# 2. Install dependencies
npm install

# 3. Run the server (nodemon recommended)
npm run dev

📬 API Endpoints
| Method | Endpoint           | Description                     |
| ------ | ------------------ | ------------------------------- |
| POST   | `/register`        | Register new user               |
| POST   | `/verify-email`    | Verify user's email             |
| POST   | `/login`           | Login and receive JWT & cookie  |
| GET    | `/logout`          | Clear cookie (logout)           |
| POST   | `/forgot-password` | Send password reset email       |
| POST   | `/reset-password`  | Reset password with token       |
| GET    | `/me`              | Get current logged-in user info |

📄 License
This project is licensed under the MIT License.

<p align="center"> Built with ❤️ by <a href="https://github.com/your-username">Your Name</a> </p>