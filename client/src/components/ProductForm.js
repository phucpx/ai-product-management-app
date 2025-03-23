// client/src/components/ProductForm.js
import React, { useState } from 'react';
import { createProduct } from '../services/api';

function ProductForm({ onProductAdded }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');


    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            // Sử dụng FileReader để đọc file ảnh và chuyển thành base64
            const reader = new FileReader();
            reader.onloadend = () => {
                setImage(reader.result); // Lưu base64 string
            };
            reader.readAsDataURL(file);
        } else {
            setImage(''); // Reset nếu không chọn file
        }
    };

  const handleSubmit = async (e) => {
    e.preventDefault();
      setError(''); // Reset error
      setLoading(true);
    try {
      await createProduct({ name, description, image });
      setName('');
      setDescription('');
      setImage('');
      onProductAdded(); // Gọi callback để thông báo cho component cha (App) biết là sản phẩm đã được thêm
        alert("Thêm sản phẩm thành công")
    } catch (err) {
        setError(err.response?.data?.message || 'An error occurred');
    } finally {
        setLoading(false);
    }
  };

  return (
    <div className="product-form">
      <h2>Add New Product</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div>
        <label htmlFor="image">Image:</label>
          <input
            type="file"
            id="image"
            accept="image/*" // Chỉ chấp nhận file ảnh
            onChange={handleImageChange}
          />
            {image && (
              <img src={image} alt="Preview" style={{ maxWidth: '200px', maxHeight: '200px' }} />
          )}
        </div>

        <button type="submit" disabled={loading}>
            {loading ? 'Adding...' : 'Add Product'}
        </button>
          {error && <p className="error-message">{error}</p>}
      </form>
    </div>
  );
}

export default ProductForm;