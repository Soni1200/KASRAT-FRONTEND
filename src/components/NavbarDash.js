import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const NavbarDash = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          KASRAT<i className="fab fa-typo3" />
        </Link>
      </div>
    </nav>
  );
};

export default NavbarDash;
