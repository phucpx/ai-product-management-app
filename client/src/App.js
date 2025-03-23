// client/src/App.js
import React, { useState, useEffect } from 'react';
import ProductForm from './components/ProductForm';
import ProductList from './components/ProductList';
import { getProducts } from './services/api';
import './styles.css';
import Layout from './components/Layout'; // Import Layout


function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

  const fetchProducts = async () => {
      setLoading(true);
      setError('');
    try {
      const response = await getProducts();
      setProducts(response.data);
    } catch (err) {
        setError('Failed to fetch products.');
        console.error(err);
    } finally {
        setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleProductAdded = () => {
    fetchProducts(); // Refetch products after a new one is added
  };

  return (
    <Layout> {/* Wrap everything with Layout */}
      <h1>Product Management</h1>
      <ProductForm onProductAdded={handleProductAdded} />

        {loading ? (
            <p>Loading products...</p>
        ) : error ? (
                <p className="error-message">{error}</p>
            ) :
              (
            <ProductList products={products} />
        )}
    </Layout>
  );
}

export default App;