# ChatApp

A modern, full-stack real-time chat application with authentication, beautiful UI, and instant messaging. Built with React, Node.js, Express, MongoDB, and Socket.IO.

---

## 🚀 Features

- **User Authentication:** Secure signup, login, and logout with JWT and cookies.
- **Real-Time Messaging:** Instant chat using Socket.IO.
- **Modern UI:** Responsive, attractive design with gradients, glassmorphism, and smooth animations.
- **User List & Search:** See all users, search for contacts, and start new conversations.
- **Chat Conversations:** View and send messages in real time.
- **Mobile Friendly:** Fully responsive for desktop and mobile devices.
- **Notifications:** Audio and visual notifications for new messages.
- **Logout:** Securely log out from any device.

---

## 🛠️ Tech Stack

**Frontend:**
- React
- Tailwind CSS & DaisyUI
- React Router
- Zustand (state management)
- Axios

**Backend:**
- Node.js
- Express.js
- MongoDB & Mongoose
- Socket.IO
- JWT (JSON Web Tokens)
- CORS, Cookie-Parser

---

## 📁 Project Structure

```
chatapp/
  ├── Backend/
  │   ├── controller/
  │   ├── models/
  │   ├── routes/
  │   ├── middleware/
  │   ├── jwt/
  │   ├── SocketIO/
  │   ├── index.js
  │   └── ... 
  └── Frontend/
      ├── src/
      │   ├── components/
      │   ├── context/
      │   ├── home/
      │   ├── assets/
      │   ├── App.jsx
      │   └── ...
      ├── public/
      ├── index.html
      └── ...
```

---

## ⚡ Getting Started

### 1. Clone the repository

```bash
git clone <your-repo-url>
cd chatapp
```

### 2. Setup the Backend

```bash
cd Backend
npm install
# Create a .env file with your MongoDB URI and JWT secret
cp .env.example .env
# Edit .env with your values
npm start
```

### 3. Setup the Frontend

```bash
cd Frontend
npm install
npm run dev
```

### 4. Open in Browser

Visit [http://localhost:5173](http://localhost:5173) (or the port shown in your terminal).

---

## 🔒 Environment Variables

Create a `.env` file in the `Backend` directory:

```
PORT=4001
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
NODE_ENV=development
```

---

## ✨ Screenshots

> Add screenshots of your login, signup, chat, and user list screens here for a more attractive README!

---

## 🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

---

## 📄 License

This project is licensed under the MIT License.

---

## 🙏 Acknowledgements

- [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [DaisyUI](https://daisyui.com/)
- [Socket.IO](https://socket.io/)
- [MongoDB](https://www.mongodb.com/)
- [Node.js](https://nodejs.org/)
