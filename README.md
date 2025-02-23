# QR-based Restaurant Ordering App

This project is a QR-based restaurant ordering system that streamlines the dining experience by allowing customers to scan QR codes to view menus and place orders directly from their devices. The system comprises two main components:

1. **Frontend**: A React-based web application for customers.
2. **Backend**: A Node.js server with Express and MongoDB for handling data and business logic.

## Prerequisites

Before setting up the project, ensure you have the following installed:

- **Node.js**: Version 14 or higher
- **npm**: Version 6 or higher
- **MongoDB**: A running instance or access to a MongoDB Atlas cluster

## Project Structure

The repository is organized as follows:

```
QR-based-Restaurant-Ordering-App/
├── qr-frontend/
└── qr-backend/
```

- `qr-frontend/`: Contains the React frontend application.
- `qr-backend/`: Contains the Node.js backend application.

## Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/MananHere576/QR-based-Restaurant-Ordering-App.git
cd QR-based-Restaurant-Ordering-App
```

### 2. Setting Up the Backend

Navigate to the `qr-backend` directory and install the necessary packages:

```bash
cd qr-backend
npm install
```

#### Environment Variables

Create a `.env` file in the `qr-backend` directory to store environment-specific configurations:

```
PORT=5000
DB_USER=yourMongoDBUsername
DB_PASSWORD=yourMongoDBPassword
DB_NAME=yourDatabaseName
DB_CLUSTER=yourClusterURL
```

Replace the placeholders with your actual MongoDB credentials and cluster information.

#### Starting the Backend Server

```bash
npm start
```

The backend server should now be running on `http://localhost:5000`.

### 3. Setting Up the Frontend

Navigate to the `qr-frontend` directory and install the necessary packages:

```bash
cd ../qr-frontend
npm install
```

#### Environment Variables

Create a `.env` file in the `qr-frontend` directory:

```
REACT_APP_API_URL=http://localhost:5000
```

This sets the base URL for API requests from the frontend to the backend server.

#### Starting the Frontend Application

```bash
npm start
```

The frontend application should now be running on `http://localhost:3000`.

## Dependencies

### Backend (`qr-backend`)

- **Express**: Web framework for Node.js
- **Mongoose**: ODM for MongoDB
- **dotenv**: Loads environment variables from a `.env` file
- **nodemon**: Utility that monitors for changes and automatically restarts the server

### Frontend (`qr-frontend`)

- **React**: JavaScript library for building user interfaces
- **axios**: Promise-based HTTP client for making API requests
- **react-router-dom**: Declarative routing for React applications

## Additional Notes

- Ensure that your MongoDB instance is running and accessible.
- For production deployments, consider setting up environment variables securely and using process managers like PM2 for the backend.
- Regularly update your dependencies to incorporate the latest security patches and features.

For any issues or contributions, please refer to the repository's issue tracker or submit a pull request.

---
