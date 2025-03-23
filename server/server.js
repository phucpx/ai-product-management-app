// server/server.js
require('dotenv').config({ path: '../.env' }); // Load .env from the project root
const express = require('express');
const cors = require('cors');
const productRoutes = require('./routes/products');
const { pool } = require('./config');

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json({ limit: '50mb' }));  // Cho phép nhận JSON body, tăng limit cho ảnh lớn
app.use(express.urlencoded({ limit: '50mb', extended: true }));

// Routes
app.use('/api/products', productRoutes);

// Test database connection (optional, but good practice)
async function testDbConnection() {
  try {
    const connection = await pool.getConnection();
    console.log('Connected to the database!');
    connection.release();
  } catch (error) {
    console.error('Error connecting to the database:', error);
  }
}
testDbConnection();


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});