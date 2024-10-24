## Contact-Management-System

This Contact Management application is built using the MERN (MongoDB, Express.js, React, Node.js) stack. It allows users to manage their contacts by adding, viewing, editing, and deleting contact information. The application also includes search and sorting functionality to enhance the user experience.

## Features

### User Authentication
- Secure login and registration for users.
- Session management to keep users logged in.

### Contact Management
- Display a list of contacts with their names, phone numbers, and email addresses.
- Add new contacts with fields for name, phone number, and email address.
- Edit existing contacts.
- Delete contacts.
- Search for contacts by name.
- Sort contacts by name or other relevant criteria.

## Technologies Used
- **MongoDB**: Database for storing contact information.
- **Express.js**: Backend server framework for handling API requests.
- **React**: Frontend library for building the user interface.
- **Node.js**: Runtime environment for the server.
- **Create React App (CRA)**: Bootstrap the React application.
- **CSS**: Styling the application.
- **JSON Web Tokens (JWT)**: For secure user authentication.
- **Bcrypt.js**: For password hashing.
- Other libraries and packages as needed.

## Getting Started

### Prerequisites
Before running the application, ensure you have the following installed on your machine:
- **Node.js** (v14 or higher)
- **npm** (Node Package Manager)
- **MongoDB Atlas** (or a local MongoDB instance)

### Backend Setup

1. **Clone the Repository**:
    ```bash
    git clone https://github.com/Adesh856/Contact_Managment_App.git
    ```
   
2. **Navigate to the backend directory**:
    ```bash
    cd Backend
    ```

3. **Install backend dependencies**:
    ```bash
    npm install
    ```

4. **Set up environment variables**:
    - Create a `.env` file in the `Backend` directory.
    - Add the following variables to the `.env` file:
      ```bash
      mongourel=<Your MongoDB Atlas URL>
      port=8000
      ```

5. **Start the backend server**:
    ```bash
    npm start
    ```

### Frontend Setup

1. **Navigate to the frontend directory**:
    ```bash
    cd Client/Frontend
    ```

2. **Install frontend dependencies**:
    ```bash
    npm install
    ```

3. **Start the frontend development server**:
    ```bash
    npm run dev
    ```
    
### Additional Information

- **Backend**: Node.js, Express, MongoDB
- **Frontend**: React.js, Vite
- **Database**: MongoDB Atlas (or a local MongoDB instance)



