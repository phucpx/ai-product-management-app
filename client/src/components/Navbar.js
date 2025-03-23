// client/src/components/Navbar.js
import React, { useState } from 'react';
import './Navbar.css'; // Import file CSS riêng

function Navbar() {
  const [showCarBrands, setShowCarBrands] = useState(false);

  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a href="/" className="nav-link">Home</a>
        </li>
        <li className="nav-item dropdown">
          <a
            href="#"
            className="nav-link dropdown-toggle"
            onClick={() => setShowCarBrands(!showCarBrands)}
          >
            Hãng xe hơi
          </a>
          {showCarBrands && (
            <ul className="dropdown-menu">
              <li><a href="/vinfast" className="dropdown-item">Vinfast</a></li>
              <li><a href="/honda" className="dropdown-item">Honda</a></li>
            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;