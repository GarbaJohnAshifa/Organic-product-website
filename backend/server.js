

// Load environment variables
require('dotenv').config();

const connectDB = require('./config/db');
connectDB(); // call it before the server starts



const express = require('express');
const cors = require('cors');
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Route
app.get('/', (req, res) => {
  res.send('🌿 Hello from Organic Products backend!');
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
