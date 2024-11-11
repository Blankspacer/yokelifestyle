// JavaScript Document
import React from 'react';
import { Link } from 'react-router-dom';
import CartIcon from './CartIcon';

const Header = () => {
  return (
    <header>
      <div className="logo">
        <Link to="/">Yokelifestyle</Link>
      </div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
	  <ul>
          <li><Link to="/shop">Shop</Link></li>
	   <li><Link to="/shop">Shop</Link></li>
	   <li><Link to="/shop">Shop</Link></li>
	  </ul>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
      <CartIcon />
    </header>
  );
};

export default Header;
