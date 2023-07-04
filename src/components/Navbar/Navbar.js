import React, { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { IoCloseSharp } from 'react-icons/io5';
import './navbar.css';
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(true);
  useEffect(() => {
    console.log();
  });
  return (
    <nav className={menuOpen ? '' : 'responsive'}>
      <div className="logo">
        <h1>
          <a href="#">GoSnippets</a>
        </h1>
      </div>
      <div className="nav_links">
        <ul>
          <li className="nav_link">
            <a href="#">About </a>
          </li>
          <li className="nav_link">
            <a href="#">Categoris </a>
          </li>
          <li className="nav_link">
            <a href="#">Blog </a>
          </li>
          <li className="nav_link">
            <a href="#">Contact </a>
          </li>
        </ul>
      </div>
      <div className="auth_links">
        <ul>
          <li className="auth_link">
            <span>Login</span>
          </li>
          <li className="auth_link">
            <span>Sign Up</span>
          </li>
        </ul>
      </div>
      <button
        className={menuOpen ? 'menu' : 'responsive-menu'}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FaBars /> : <IoCloseSharp />}
      </button>
    </nav>
  );
};

export default Navbar;
