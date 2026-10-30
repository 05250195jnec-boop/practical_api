require('dotenv').config();
const express = require('express');
const cors = require('cors'); // <-- Added this
const taskRoutes = require('./src/routes/taskRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Enable CORS so Live Server (port 5500) can talk to this backend (port 3000)
app.use(cors()); // <-- Added this

app.use(express.json());

// Serve the frontend files
app.use(express.static('frontend'));

// API Routes
app.use('/tasks', taskRoutes);

// Global Error Handler
app.use((err, req, res, next) => {
  console.error('Error:', err.stack);
  res.status(err.statusCode || 500).json({
    error: err.message || 'Internal Server Error',
  });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});