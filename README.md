# Task List REST API & Frontend

A complete, full-stack Task Management application built using **Node.js**, **Express**, and **MySQL**. 

This project is structured using the **MVC (Model-View-Controller)** design pattern to ensure the code is clean, scalable, and easy to maintain. It features a fully functional REST API for backend operations and a lightweight frontend interface for users to manage their tasks.

---

## ✨ Features

- **Full CRUD Operations:** Create, Read, Update, and Delete tasks seamlessly.
- **MVC Architecture:** Clean separation of concerns (Models for database, Controllers for logic, Routes for endpoints).
- **MySQL Database:** Persistent storage for all tasks.
- **Vanilla Frontend:** A simple, responsive user interface (HTML/CSS/JS) that consumes the API.
- **Environment Security:** Database credentials safely hidden using `.env`.
- **Database Connection Test:** A dedicated script (`test-db.js`) to verify your database setup before running the app.

---

## 🛠️ Tech Stack

- **Backend:** Node.js, Express.js
- **Database:** MySQL
- **Frontend:** HTML5, CSS3, Vanilla JavaScript (Fetch API)
- **Architecture:** MVC (Model-View-Controller)

---

## 📂 Detailed Project Structure

Here is an explanation of every file and folder in this repository:

```text
task-api/
│
├── database/
│   └── schema.sql             # SQL script to create the database and `tasks` table.
│
├── frontend/                  # The user interface
│   ├── index.html             # The main UI layout.
│   ├── script.js              # Frontend logic (fetches data from the API and updates the DOM).
│   └── style.css              # Styling for the task list and forms.
│
├── src/                       # Backend source code (MVC)
│   ├── controllers/           
│   │   └── taskControllers.js # Contains the logic for handling API requests (req, res).
│   ├── models/                
│   │   └── taskModels.js      # Executes SQL queries against the MySQL database.
│   ├── routes/                
│   │   └── taskRoutes.js      # Maps API endpoints (e.g., GET /api/tasks) to controllers.
│   └── db.js                  # Configures and exports the MySQL connection pool.
│
├── .env                       # (Not tracked by Git) Stores secret DB credentials.
├── .gitignore                 # Tells Git which files/folders to ignore (e.g., node_modules).
├── package.json               # Lists project dependencies and scripts.
├── README.md                  # Project documentation (this file).
├── server.js                  # The main entry point. Starts the Express server.
└── test-db.js                 # A quick script to test if your MySQL connection is successful.