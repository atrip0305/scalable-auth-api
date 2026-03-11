# Scalable Auth API – Full Stack Assignment

This project implements a scalable REST API with authentication and role-based access control along with a simple frontend UI to interact with the APIs.

The system allows users to register, login using JWT authentication, and perform CRUD operations on tasks.

---

## Tech Stack

### Backend
- NestJS
- Prisma ORM
- PostgreSQL
- JWT Authentication
- Swagger API Documentation

### Frontend
- Next.js (App Router)
- React
- Axios
- Plain CSS

---

## Features

### Authentication
- User registration
- Secure password hashing
- JWT login authentication
- Protected routes using JWT guards

### Role Based Access
- USER role
- ADMIN role
- Admin-only protected endpoints

### Tasks CRUD
Users can:

- Create tasks
- View tasks
- Update tasks
- Delete tasks

Tasks are linked to the user that created them.

### API Documentation
Interactive Swagger documentation available at: http://localhost:3000/api


---

## Project Structure
scalable-auth-api
│
├── backend
│ ├── src
│ │ ├── auth
│ │ ├── users
│ │ ├── tasks
│ │ └── prisma
│ └── prisma/schema.prisma
│
└── frontend
├── app
│ ├── login
│ ├── register
│ ├── dashboard
│ └── page.tsx
└── lib/api.ts



---

## Installation

Clone the repository:
git clone https://github.com/atrip0305/scalable-auth-api

---

## Backend Setup


cd backend
npm install


Create `.env` file:


DATABASE_URL=postgresql://user:password@localhost:5432/dbname
JWT_SECRET=supersecret


Run migrations:
npx prisma migrate dev


Start backend:
npm run start:dev


Backend runs at: http://localhost:3000
Swagger docs: http://localhost:3000/api


---

## Frontend Setup


cd frontend
npm install
npm run dev


Frontend runs at: http://localhost:3001


---

## Application Flow

1. User registers
2. User logs in and receives a JWT token
3. Token is stored in localStorage
4. Authenticated requests include:


Authorization: Bearer <token>


5. User can manage tasks via the dashboard

---

## Security Practices

- Password hashing using bcrypt
- JWT authentication
- Protected API routes using guards
- Input validation using DTOs
- User ownership validation for tasks

---

## Scalability Considerations

This project follows a modular architecture designed for scalability.

### Modular Backend
Each feature is implemented as a separate NestJS module:

- AuthModule
- UsersModule
- TasksModule

This allows independent scaling and easier maintenance.

### Database Optimization
- Indexed task ownership (`userId`)
- Normalized relational schema
- Prisma ORM for efficient query management

### Future Scalability Improvements

Possible improvements for production systems:

- Redis caching for frequently accessed data
- Load balancing across multiple API instances
- PgBouncer for PostgreSQL connection pooling
- Microservice architecture for authentication and task services
- Docker containerization for deployment

---

## Future Improvements

- Task status updates
- Task filtering and pagination
- Admin dashboard
- Token refresh mechanism
- Docker based deployment

---

## Author

Backend and frontend implemented as part of a backend engineering assignment.
