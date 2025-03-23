// server/routes/products.js
const express = require('express');
const router = express.Router();
const Product = require('../models/product');

// Lấy tất cả sản phẩm
router.get('/', async (req, res) => {
  try {
    const products = await Product.getAll();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: 'Error getting products', error: error.message });
  }
});

// Tạo sản phẩm mới
router.post('/', async (req, res) => {
  try {
    const { name, description, image } = req.body;
    if (!name || !description || !image) {
      return res.status(400).json({ message: 'Name, description, and image are required' });
    }

    const productId = await Product.create(name, description, image);
    res.status(201).json({ message: 'Product created', id: productId });
  } catch (error) {
    res.status(500).json({ message: 'Error creating product', error: error.message });
  }
});

module.exports = router;