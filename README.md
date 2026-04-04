# 🔗 URL Shortener Application

A full-stack URL Shortener web application that allows users to register, login, generate short URLs, and manage their links efficiently.

---

## 🚀 Tech Stack

### 🔹 Frontend

* React (Vite)
* JavaScript (ES6+)
* HTML5, CSS3
* Axios
* React Router DOM

### 🔹 Backend

* Java (Spring Boot)
* Spring MVC
* Spring Data JPA
* Hibernate

### 🔹 Database

* MySQL

### 🔹 Tools & Technologies

* Git & GitHub
* REST APIs
* Postman (API Testing)

---

## ✨ Features

* User Registration & Login
* URL Shortening
* Redirect to Original URL
* View All User URLs
* Update Shortened URL
* Delete URL
* Forgot Password & Reset Password

---

## 🔗 API Endpoints

### 🔹 Authentication APIs

**Register User**

```
POST /users/register
```

**Login User**

```
POST /users/login
```

**Forgot Password**

```
POST /users/forgot-password
```

**Reset Password**

```
POST /users/reset-password
```

---

### 🔹 URL Management APIs

**Create Short URL**

```
POST /url/shorten
```

**Get User URLs**

```
GET /url/user-urls/{userId}
```

**Update URL**

```
PUT /url/update/{urlId}
```

**Delete URL**

```
DELETE /url/delete
```

**Request Body (Delete API)**

```json
{
  "userId": "number",
  "shortUrl": "string"
}
```

---

### 🔹 Redirect API

**Redirect to Original URL**

```
GET /url/{shortUrl}
```

---

## 📌 Base URL

```
http://localhost:8080
```

---

## ⚙️ How to Run the Project

### 🔹 Backend (Spring Boot)

```
mvn spring-boot:run
```

---

### 🔹 Frontend (React Vite)

```
npm install
npm run dev
```

---

## 📁 Project Structure

```
frontend/
backend/
```

---

## 📌 Notes

* Backend should be running on `http://localhost:8080`
* Update API URLs in frontend if backend port changes
* Ensure MySQL is running and configured properly

---

## 📈 Future Improvements

* Add Analytics (click tracking)
* Custom short URLs
* QR Code generation
* Deployment (AWS / Render / Vercel)

---
