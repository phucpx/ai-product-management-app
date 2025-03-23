// server/models/product.js
const { pool } = require('../config');

class Product {
  static async getAll() {
    const [rows] = await pool.query('SELECT * FROM products');
    return rows;
  }

  static async create(name, description, image) {
    const [result] = await pool.query(
      'INSERT INTO products (name, description, image) VALUES (?, ?, ?)',
      [name, description, image]
    );
    return result.insertId;
  }
}

module.exports = Product;