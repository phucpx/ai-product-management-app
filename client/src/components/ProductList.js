// client/src/components/ProductList.js
import React from 'react';
import ProductItem from './ProductItem';

function ProductList({ products }) {
  return (
    <div className="product-list">
      <h2>Products</h2>
      {products.length === 0 ? (
        <p>No products yet.</p>
      ) : (
        <div className="product-grid">
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
        </div>
      )}
    </div>
  );
}

export default ProductList;