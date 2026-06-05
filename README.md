# 🍗 KFC Delivery Application

<p align="center">
  <img src="./assets/banner.png" alt="KFC Delivery Application Banner"/>
</p>

<p align="center">
  <strong>A Full-Stack MERN Food Delivery Platform</strong>
</p>

<p align="center">
  Inspired by modern food delivery systems, built with scalability, usability, and real-world software engineering principles in mind.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Status-Live-success" />
  <img src="https://img.shields.io/badge/Frontend-React-blue" />
  <img src="https://img.shields.io/badge/Backend-Node.js-green" />
  <img src="https://img.shields.io/badge/Database-MongoDB-brightgreen" />
  <img src="https://img.shields.io/badge/Deployment-Vercel-black" />
</p>

---

## 🚀 Live Demo

### Frontend

https://kfc-delivery-application.vercel.app

### Backend API

https://kfc-delivery-application-server.vercel.app

---

## 📖 Overview

The KFC Delivery Application is a full-stack food ordering platform that replicates the core functionality of modern restaurant delivery services.

Users can browse menu items, manage their shopping cart, place orders, and interact with a responsive user interface optimized for both desktop and mobile devices.

The project was designed to strengthen my understanding of production-grade web application development using the MERN stack while focusing on API architecture, database integration, component-driven design, and deployment workflows.

---

## 🎯 Why I Built This

Food delivery platforms handle complex interactions between users, menus, orders, and databases.

I built this project to gain hands-on experience solving challenges commonly found in real-world applications, including:

* Frontend and backend integration
* RESTful API development
* Database modeling and persistence
* Responsive user interface design
* Production deployment workflows
* State management and asynchronous operations

The goal was not simply to build another CRUD application, but to understand how scalable food delivery systems are structured and maintained.

---

## ✨ Key Features

### Customer Features

* Browse food categories and menu items
* View detailed product information
* Add items to cart
* Remove items from cart
* Update item quantities
* Place orders
* Responsive mobile-first experience
* Fast and intuitive navigation

### Application Features

* RESTful API architecture
* MongoDB database integration
* Dynamic menu rendering
* Component-based frontend architecture
* Error handling and validation
* Production deployment
* Scalable backend structure

---

## 📸 Application Preview

### 🏠 Home Page

<img src="./assets/home-page.png" alt="Home Page"/>

### 🍔 Menu & Ordering Experience

<img src="./assets/menu-page.png" alt="Menu Page"/>

### 🛒 Shopping Cart

<img src="./assets/cart-page.png" alt="Cart Page"/>

### 📱 Mobile Experience

<img src="./assets/mobile-view.png" alt="Mobile View"/>

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

### Application Flow

1. User interacts with the React frontend.
2. Frontend sends requests to the Express API.
3. API processes requests and communicates with MongoDB.
4. Data is returned to the frontend.
5. UI updates dynamically based on user actions.

---

## 🛠️ Technology Stack

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

### Development Tools

* Git
* GitHub
* VS Code

### Deployment

* Vercel
* MongoDB Atlas

---

## 📂 Project Structure

```bash
KFC-delivery-application
│
├── client
│   ├── public
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   ├── hooks
│   │   └── services
│   │
│   └── package.json
│
├── server
│   ├── controllers
│   ├── middleware
│   ├── models
│   ├── routes
│   ├── config
│   └── package.json
│
├── assets
│
└── README.md
```

---

## ⚙️ Installation

### Clone the Repository

```bash
git clone https://github.com/coffee-driven-dev007/KFC-delivery-application.git
```

### Navigate into the Project

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

Create a `.env` file inside the server directory.

```env
PORT=5000

MONGODB_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key
```

---

## ▶️ Running the Application Locally

### Start Backend Server

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

### Menu

```http
GET /api/menu
```

Returns all available menu items.

### Orders

```http
POST /api/orders
```

Creates a new order.

```http
GET /api/orders
```

Retrieves all orders.

---

## 🚧 Challenges Solved

During development, I encountered and solved several real-world engineering challenges:

### Frontend & Backend Integration

Implemented reliable communication between the React client and Express server while handling asynchronous requests efficiently.

### Database Management

Designed MongoDB schemas capable of supporting menu management and order processing.

### Responsive Design

Built a mobile-friendly user interface that adapts seamlessly across screen sizes.

### Deployment

Successfully deployed both frontend and backend services while managing environment variables and production configurations.

---

## 🧠 Engineering Takeaways

This project strengthened my understanding of:

* Full-Stack MERN Development
* REST API Design
* Database Modeling
* Component-Based Architecture
* Responsive UI Development
* Production Deployment
* Application Scalability Principles
* Software Engineering Best Practices

---

## 📈 Future Enhancements

Planned improvements include:

* User Authentication & Authorization
* Secure Payment Integration
* Real-Time Order Tracking
* Push Notifications
* Admin Dashboard
* Driver Management Module
* Analytics & Reporting
* WebSocket-Based Live Updates

---

## 👨‍💻 Author

### James Matsheni

Full-Stack MERN Developer focused on building scalable systems, real-time applications, and software that solves real-world problems.

**GitHub:** https://github.com/coffee-driven-dev007

---

## ⭐ Support

If you found this project interesting, consider giving it a star. It helps showcase the project and supports future development.

---

## 📄 License

This project is licensed under the MIT License.
