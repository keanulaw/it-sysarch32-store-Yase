// Header.jsx

import React from 'react';
import './index.css'; // Import your CSS file

function Header({ cart }) {
  return (
    <header className="head">
      <h1>Shannon</h1>
      <hr />
      <img src="https://static1.cbrimages.com/wordpress/wp-content/uploads/2020/03/dorohedoro-the-hungry-bug.jpg" alt="Logo" className='bigimage'/> 
      <div className="cart-icon-container">
        <i className="fa fa-shopping-cart cart-icon"></i>
        <span className="cart-count">{cart.length}</span>
      </div>
    </header>
  );
}

export default Header;
