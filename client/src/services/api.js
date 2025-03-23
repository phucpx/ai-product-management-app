// client/src/services/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api', // URL của backend
});

export const getProducts = () => api.get('/products');
export const createProduct = (productData) => api.post('/products', productData);