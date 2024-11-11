// JavaScript Document
import React, { useState } from 'react';

const CartIcon = () => {
  const [cartCount, setCartCount] = useState(0);

  return (
    <div className="cart-icon">
      <span>🛒</span>
      {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
    </div>
  );
};

export default CartIcon;
