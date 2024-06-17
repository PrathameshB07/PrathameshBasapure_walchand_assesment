import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import headerStyles from '../Styles/header.module.css';

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleClick = (e, id) => {
    e.preventDefault();
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className={headerStyles.headerContainer}>
      <div className={headerStyles.logo}>
        <NavLink to={'/'}>HandyCraft</NavLink>
      </div>
      <div className={`${headerStyles.nav} ${showMenu ? headerStyles.showMenu : ''}`}>
        <div className={headerStyles.navItem}>
          <a href="#key-products" onClick={(e) => handleClick(e, 'key-products')}>
            Products
          </a>
        </div>
        <div className={headerStyles.navItem}>
          <a href="#about-us" onClick={(e) => handleClick(e, 'about-us')}>
            About
          </a>
        </div>
        <div className={headerStyles.navItem}>
          <a href="#contact-us" onClick={(e) => handleClick(e, 'contact-us')}>
            Contact
          </a>
        </div>
      </div>
      <div className={headerStyles.menuToggle} onClick={toggleMenu}>
        <span className={headerStyles.bar}></span>
        <span className={headerStyles.bar}></span>
        <span className={headerStyles.bar}></span>
      </div>
    </div>
  );
};

export default Header;