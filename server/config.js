// server/config.js
const mysql = require('mysql2/promise');

const dbConfig = {
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root', // Thay đổi nếu bạn có user khác
  password: '', // Thay bằng mật khẩu MySQL của bạn
  database: process.env.DB_DATABASE || 'product_management',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
};

const pool = mysql.createPool(dbConfig);


module.exports = {
    pool
};