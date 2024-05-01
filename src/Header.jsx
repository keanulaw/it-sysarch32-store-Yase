// Header.jsx
import React from 'react';

function Header() {
  return (
    <header className="head">
      <h1>Shannon</h1>
      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
          <hr />
        </ul>
      </nav>
    </header>
  );
}

export default Header;