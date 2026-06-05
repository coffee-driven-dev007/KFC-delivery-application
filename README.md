# 🍗 KFC Delivery Application

> A full-stack MERN food delivery platform inspired by modern restaurant ordering systems, featuring responsive design, cart management, order processing, and scalable backend architecture.

![Status](https://img.shields.io/badge/Status-Completed-success)
![React](https://img.shields.io/badge/Frontend-React-blue)
![Node.js](https://img.shields.io/badge/Backend-Node.js-green)
![MongoDB](https://img.shields.io/badge/Database-MongoDB-brightgreen)
![License](https://img.shields.io/badge/License-MIT-yellow)

---

## 🚀 Overview

The KFC Delivery Application is a full-stack web application that simulates a real-world food delivery experience. Customers can browse menu items, manage their cart, place orders, and enjoy a responsive experience across desktop and mobile devices.

The project was built to explore production-grade application development using the MERN stack while focusing on API design, state management, database integration, and deployment.

### Live Application

🌐 Frontend: https://kfc-delivery-application.vercel.app

⚡ Backend API: https://kfc-delivery-application-server.vercel.app

---

## 📸 Preview

### Home Page

Add screenshot here

### Menu & Ordering

Add screenshot here

### Mobile Experience

Add screenshot here

---

## ✨ Key Features

### Customer Experience

* Browse available menu items
* View detailed product information
* Add and remove items from cart
* Update item quantities
* Place food orders
* Responsive mobile-first design
* Fast and intuitive user experience

### Application Features

* RESTful API architecture
* MongoDB data persistence
* Dynamic menu rendering
* State management across components
* Error handling and validation
* Production deployment with Vercel

---

## 🏗️ System Architecture

```text
┌───────────────┐
│ React Client  │
└───────┬───────┘
        │ HTTP Requests
        ▼
┌───────────────┐
│ Express API   │
└───────┬───────┘
        │
        ▼
┌───────────────┐
│ MongoDB       │
└───────────────┘
```

---

## 🛠️ Tech Stack

### Frontend

* React.js
* JavaScript (ES6+)
* CSS3
* Axios

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose

### Deployment

* Vercel
* GitHub

---

## 📂 Project Structure

```bash
KFC-delivery-application
│
├── client
│   ├── src
│   ├── public
│   └── package.json
│
├── server
│   ├── controllers
│   ├── routes
│   ├── models
│   ├── middleware
│   └── package.json
│
└── README.md
```

---

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/coffee-driven-dev007/KFC-delivery-application.git
```

### Install Dependencies

```bash
cd KFC-delivery-application

# Frontend
cd client
npm install

# Backend
cd ../server
npm install
```

---

## 🔐 Environment Variables

Create a `.env` file inside the server directory.

```env
PORT=5000

MONGODB_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret
```

---

## ▶️ Running Locally

### Start Backend

```bash
cd server
npm run dev
```

### Start Frontend

```bash
cd client
npm start
```

Application runs on:

```text
Frontend: http://localhost:3000

Backend: http://localhost:5000
```

---

## 📡 API Endpoints

### Menu

```http
GET /api/menu
```

Retrieve all menu items.

### Orders

```http
POST /api/orders
```

Create a new order.

```http
GET /api/orders
```

Retrieve all orders.

---

## 🚧 Challenges Solved

During development, several real-world challenges were addressed:

* Managing frontend and backend communication efficiently
* Structuring a scalable Express API
* Designing reusable React components
* Handling asynchronous data fetching
* Creating a responsive experience across devices
* Deploying separate frontend and backend services

---

## 📈 Future Improvements

* User Authentication
* Online Payments Integration
* Real-Time Order Tracking
* Admin Dashboard
* Push Notifications
* Delivery Driver Module
* Order Analytics

---

## 💡 What I Learned

This project strengthened my understanding of:

* Full-Stack MERN Development
* REST API Design
* MongoDB Data Modeling
* Production Deployment
* Component-Based Architecture
* Responsive UI Development
* Application Scalability Principles

---

## 👨‍💻 Author

### James Matsheni

Full-Stack MERN Developer passionate about building scalable systems and solving real-world problems through software.

GitHub:
https://github.com/coffee-driven-dev007

---

## ⭐ Support

If you found this project interesting, consider giving it a star. It helps showcase the project and supports future development.

---

## 📄 License

MIT License
