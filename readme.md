# **User Backend API**

## **Overview**

This is a backend API for user management, built using Node.js, Express, and MONGODB

## FEATURES

- User registration and authentication (JWT-based)
- CRUD operations for user data
- Secure password handling with bcrypt
- RESTful API design

## Prerequisites

Prerequisites for running project

- nodejs
- mongodb
- postman (optional)

## Installation

1. Clone the Repository

```
git clone https://github.com/Gurnav224/backend_assignment_User_API.git

cd backend_assignment_User_API
```

2. install dependencies

```
npm install
```

3. Set Up Environment Variables
   Create a .env file in the root directory and add the following:

```
PORT=
MONGO_URI=
SECRET_KEY =
```

4. start the server

```
npm start
```

The server should now be running at http://localhost:8080

## API endpoints

### Authentication

- POST /auth/signup Register new user
- POST /auth/login Authenticate user and token

### User Management

    - GET: /auth/me GET user
    - PUT: /auth/me/:userId update the user details

    Testing the API

Use Postman or any API client to test the endpoints.
