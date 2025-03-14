import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import '../styles/navigation.css';
import logo from '../components/open-bookicon.png';
import searchIcon from '../components/searchicon.png';
import bellIcon from '../components/bellicon.png';
import lineIcon from '../components/hamburgericon.png';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="navigation">
      <div className="logo-section">
        <img src={logo} alt="EduConnect Ghana Logo" className="logo" />
        <span className="website-name">EduConnect Ghana</span>
      </div>

      <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
        <a href="#forums">Forums</a>
        <Link to="/resources">Resources</Link> {/* Use Link for navigation */}
        <a href="#find-peers">Find Peers</a>
        <a href="#events">Events</a>
      </div>

      <div className="search-notifications">
        <div className="search-bar">
          <input type="text" placeholder="Search courses..." />
          <img src={searchIcon} alt="search icon" className="search-icon" />
        </div>
        <div className="notification-bell">
          <img src={bellIcon} alt="notification bell" className="bell-icon" />
          <div className="notification-badge">1</div>
        </div>
      </div>

      <div className="hamburger-menu" onClick={toggleMenu}>
        <img src={lineIcon} alt="hamburger menu" className="line-icon" />
      </div>
    </div>
  );
};

export default Navigation;
