import React from 'react';
import '../App.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><a href="/">HOME</a></li>
        <li><a href="/login">LOGIN</a></li>
        <li><a href="/profile">PROFILE</a></li>
        <li><a href="/contact">CONTACT US</a></li>
        <li><a href="/contact">LOG OUT</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
