// JavaScript Document
import React from 'react';
import ProductCard from '../components/ProductCard';

const Home = () => {
  // Sample product data (mocking for now)
  const products = [
    { id: 1, name: 'Shirt', price: 25, image: '/images/shirt.jpg' },
    { id: 2, name: 'Jacket', price: 50, image: '/images/jacket.jpg' },
    // Add more products here
  ];

  return (
    <div className="home">
      <h1>Welcome to Shen Clothing</h1>
      <div className="product-list">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
