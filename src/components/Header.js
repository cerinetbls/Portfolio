import React, { useState } from 'react';
import bannière from '../assets/images/bannière.jpg';
import CV from '../assets/MonCV.pdf'; 

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <nav className="navbar">
        <div className="burger" onClick={toggleMenu}>
          <div className={isOpen ? 'line1 toggle' : 'line1'}></div>
          <div className={isOpen ? 'line2 toggle' : 'line2'}></div>
          <div className={isOpen ? 'line3 toggle' : 'line3'}></div>
        </div>
        <ul className="nav-links">
          <li><a href="#apropos">À Propos</a></li>
          <li><a href="#competences">Mes Compétences</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <ul className={`nav-links-mobile ${isOpen ? 'nav-active' : ''}`}>
          <span className="close-btn" onClick={toggleMenu}>&times;</span>
          <li><a href="#apropos" onClick={toggleMenu}>À Propos</a></li>
          <li><a href="#competences" onClick={toggleMenu}>Mes Compétences</a></li>
          <li><a href="#portfolio" onClick={toggleMenu}>Portfolio</a></li>
          <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
        </ul>
      </nav>

      <div className="banniere">
        <img src={bannière} alt="Image bannière" className="banniere-image" />
        <div className="text-content">
          <p>Trabelsi Cérine</p>
          <p>Développeuse Web</p>
          <div className="buttons">
            <a href="#contact">
              <button className="btn">Me contacter</button>
            </a>
            <a href={CV} download="MonCV.pdf" target="_blank" rel="noopener noreferrer">
              <button className="btn">Mon CV</button>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;


