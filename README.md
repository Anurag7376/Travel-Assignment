# 🌍 Treat Holidays - MERN Stack Travel Booking App

Treat Holidays is a full-featured travel booking platform built using the **MERN stack** (MongoDB, Express, React, Node.js), featuring elegant animations with **Framer Motion**, 
sleek UI components via **MUI**, and robust HTTP communication using **Axios**. 
This app allows users to browse, book, and manage travel destinations with a modern, responsive UI and secure backend.

---

---

## 🛠️ Tech Stack

### 🖥️ Frontend
- **React.js** (with Hooks & Functional Components)
- **Framer Motion** (page & element animations)
- **Axios** (API communication)
- **MUI (Material UI)** for pre-built, customizable components
- **React Router v6** for client-side routing
- **Tailwind CSS** for utility-first styling

### 🧠 Backend
- **Node.js**
- **Express.js**
- **MongoDB** with **Mongoose**
- **Rate Limiting & Validation** (express-validator / helmet / cors)

---

## ✨ Key Features

- 🔎 **Explore Destinations** with card-based UI
- 📋 **User Dashboard** to manage bookings
- 🧭 **Responsive Design** (Mobile-First)
- 🧊 **Framer Motion Animations** across pages
- ⚙️ **RESTful APIs** with validation & error handling
- 📩 **Axios-powered client-server communication**
- 📦 **Modular Code Structure** for scalability

---

## 📁 Project Structure

```bash
.
├── client/                 # React Frontend
│   ├── public/
│   └── src/
│       ├── components/
│       ├── pages/
│       ├── assets/
│       ├── App.jsx
│       └── main.jsx
├── server/                 # Node.js Backend
│   ├── controllers/
│   |── config/
│   ├── models/
│   └── app.js
├── .env
├── package.json
└── README.md

## Project Setup
--> Frontend
    -cd frontend
    -npm i
    -npm run dev

--> Backend
    -cd backend
    -npm i
    -npm run dev
