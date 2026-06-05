# 🍗 KFC Delivery Application

<p align="center">
  <img src="./assets/banner.png" width="100%" alt="KFC Delivery Application Banner"/>
</p>

<h3 align="center">
A Full-Stack MERN Food Delivery Platform
</h3>

<p align="center">
Inspired by modern food delivery systems and built using production-grade software engineering practices.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Status-Live-success" />
  <img src="https://img.shields.io/badge/Frontend-React-blue" />
  <img src="https://img.shields.io/badge/Backend-Node.js-green" />
  <img src="https://img.shields.io/badge/Database-MongoDB-brightgreen" />
  <img src="https://img.shields.io/badge/Deployment-Vercel-black" />
  <img src="https://img.shields.io/github/stars/coffee-driven-dev007/KFC-delivery-application" />
  <img src="https://img.shields.io/github/forks/coffee-driven-dev007/KFC-delivery-application" />
</p>

---

## 🚀 Live Demo

### 🌐 Frontend

https://kfc-delivery-application.vercel.app

### ⚡ Backend API

https://kfc-delivery-application-server.vercel.app

---

## 📖 Overview

The KFC Delivery Application is a full-stack MERN platform that replicates the experience of ordering food through a modern restaurant delivery service.

Customers can browse menu items, manage their cart, place orders, and interact with a responsive user interface optimized for desktop, tablet, and mobile devices.

The project focuses on scalable architecture, clean API design, reusable frontend components, and production deployment practices.

---

## 🎯 Why I Built This

Food delivery applications are excellent examples of real-world systems that require multiple layers of functionality working together seamlessly.

I built this project to deepen my understanding of:

* Full-stack application architecture
* Frontend and backend integration
* RESTful API development
* MongoDB data modelling
* Responsive user interface design
* Production deployment workflows
* Component-driven development

The objective was to move beyond simple CRUD applications and gain experience building software that mirrors real-world customer-facing systems.

---

## 📊 Project Highlights

| Feature              | Description                  |
| -------------------- | ---------------------------- |
| Architecture         | Full-Stack MERN              |
| Frontend             | React.js                     |
| Backend              | Node.js & Express            |
| Database             | MongoDB                      |
| Deployment           | Vercel                       |
| API Style            | RESTful                      |
| UI                   | Responsive Design            |
| Development Approach | Component-Based Architecture |

---

## ✨ Core Features

### 🍔 Customer Experience

* Browse available menu items
* View detailed product information
* Add products to cart
* Remove products from cart
* Update item quantities
* Place food orders
* Responsive mobile-first design
* Fast and intuitive navigation

### ⚙️ Application Features

* RESTful API architecture
* MongoDB database integration
* Dynamic content rendering
* Component-based frontend architecture
* Error handling and validation
* Environment variable configuration
* Production deployment
* Scalable backend structure

---

## 📸 Application Preview

### 🏠 Home Page

<p align="center">
  <img src="./assets/home.png" width="100%" alt="Home Page"/>
</p>

### 🍗 Menu Experience

<p align="center">
  <img src="./assets/menu.png" width="100%" alt="Menu Page"/>
</p>

### 🛒 Shopping Cart

<p align="center">
  <img src="./assets/cart.png" width="100%" alt="Cart Page"/>
</p>

### 📱 Mobile Experience

<p align="center">
  <img src="./assets/mobile.png" width="300" alt="Mobile View"/>
</p>

---

## 🏗️ System Architecture

```text
┌─────────────────────┐
│     React Client    │
└──────────┬──────────┘
           │
           │ HTTP Requests
           ▼
┌─────────────────────┐
│     Express API     │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│      MongoDB        │
└─────────────────────┘
```

### Request Flow

1. User interacts with the React frontend.
2. React sends API requests to the Express server.
3. Express processes requests and communicates with MongoDB.
4. Database responses are returned to the API.
5. The frontend updates dynamically based on returned data.

---

## 🛠️ Technology Stack

### Frontend

```text
React.js
JavaScript (ES6+)
CSS3
Axios
```

### Backend

```text
Node.js
Express.js
MongoDB
Mongoose
```

### Deployment & Tools

```text
Vercel
MongoDB Atlas
Git
GitHub
VS Code
```

---

## 📂 Project Structure

```bash
KFC-delivery-application
│
├── assets
│   ├── banner.png
│   ├── home.png
│   ├── menu.png
│   ├── cart.png
│   └── mobile.png
│
├── client
│   ├── public
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   ├── hooks
│   │   ├── services
│   │   └── utils
│   │
│   └── package.json
│
├── server
│   ├── controllers
│   ├── routes
│   ├── models
│   ├── middleware
│   ├── config
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

### Navigate Into Project

```bash
cd KFC-delivery-application
```

### Install Frontend Dependencies

```bash
cd client
npm install
```

### Install Backend Dependencies

```bash
cd ../server
npm install
```

---

## 🔐 Environment Variables

Create a `.env` file inside the server folder:

```env
PORT=5000

MONGODB_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key
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

Application URLs:

```text
Frontend:
http://localhost:3000

Backend:
http://localhost:5000
```

---

## 📡 API Endpoints

### Menu Routes

```http
GET /api/menu
```

Returns all available menu items.

---

### Order Routes

```http
POST /api/orders
```

Creates a new customer order.

```http
GET /api/orders
```

Retrieves all orders.

---

## 🚧 Engineering Challenges Solved

### Frontend & Backend Communication

Designed reliable communication between the React client and Express server using asynchronous API requests.

### Database Design

Created MongoDB schemas capable of managing menu items and customer orders efficiently.

### Responsive User Experience

Developed a mobile-friendly interface that maintains usability across multiple screen sizes.

### Deployment Strategy

Configured and deployed frontend and backend services while managing environment variables and production settings.

---

## 🧠 Key Takeaways

This project strengthened my understanding of:

* Full-Stack MERN Development
* REST API Design
* Database Modelling
* Scalable Application Architecture
* Component-Based Development
* Responsive Design Principles
* Production Deployment
* Software Engineering Best Practices

---

## 📈 Future Enhancements

Planned improvements include:

* Authentication & Authorization
* Online Payment Integration
* Real-Time Order Tracking
* WebSocket-Based Updates
* Push Notifications
* Admin Dashboard
* Driver Management System
* Analytics & Reporting
* Order History Management

---

## 👨‍💻 Author

### James Matsheni

Full-Stack MERN Developer passionate about building scalable systems, real-time applications, and software that solves real-world problems.

**GitHub:** https://github.com/coffee-driven-dev007

---

## ⭐ Support

If you found this project useful or interesting, consider giving it a star. It helps increase visibility and supports future development.

---

## 📄 License

Licensed under the MIT License.

---

<p align="center">
Built with ❤️ using React, Node.js, Express, and MongoDB.
</p>
