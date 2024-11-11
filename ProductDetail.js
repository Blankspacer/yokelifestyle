// JavaScript Document
import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const { id } = useParams();
  // Fetch product details by id from an API or mock data
  const product = { id, name: 'Shirt', price: 25, description: 'A nice cotton shirt', image: '/images/shirt.jpg' };

  return (
    <div className="product-detail">
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>${product.price}</p>
      <button>Add to Cart</button>
    </div>
  );
};

export default ProductDetail;
