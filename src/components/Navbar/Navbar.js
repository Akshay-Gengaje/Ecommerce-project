import React from 'react';
import { FaBars } from 'react-icons/fa';
import './navbar.css';
const Navbar = () => {
  return (
    <nav>
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
      <div className="hamburger">
        <FaBars />
      </div>
    </nav>
  );
};

export default Navbar;
