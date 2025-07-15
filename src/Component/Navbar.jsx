import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const isActive = (path) => {
    if (path === '/home' && location.pathname === '/') return true;
    return location.pathname === path;
  };

  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        Vijay
      </Link>
      
      <ul className="nav-links">
        <li>
          <Link 
            to="/home" 
            className={isActive('/home') ? 'active' : ''}
          >
            Home
          </Link>
        </li>
        <li>
          <Link 
            to="/about" 
            className={isActive('/about') ? 'active' : ''}
          >
            About
          </Link>
        </li>
        <li>
          <Link 
            to="/work" 
            className={isActive('/work') ? 'active' : ''}
          >
            Work
          </Link>
        </li>
        <li>
          <Link 
            to="/contact" 
            className={isActive('/contact') ? 'active' : ''}
          >
            Contact
          </Link>
        </li>
        <li>
          <a 
            href="https://drive.google.com/file/d/162MZt3QjBPz7XVczghNLNOQc1-3rI5Gp/view?usp=share_link" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </li>
      </ul>

      <button 
        className="menu-toggle"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <X /> : <Menu />}
      </button>
    </nav>
  );
}

export default Navbar;