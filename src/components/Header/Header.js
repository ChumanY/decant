import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Asegúrate de crear este archivo para los estilos

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <div className="logo">
        <img src="/path/to/logo.png" alt="Company Logo" />
        <span>Nombre de la Empresa</span>
      </div>
      <div className="menu-icon" onClick={toggleMenu}>
        &#9776; {/* Ícono de hamburguesa */}
      </div>
      <nav className="nav">
        <ul className={menuOpen ? "show" : ""}>
          <li><Link to="/" onClick={() => setMenuOpen(false)}>Inicio</Link></li>
          <li><Link to="/producto" onClick={() => setMenuOpen(false)}>Producto</Link></li>
          <li><Link to="/sobre-nosotros" onClick={() => setMenuOpen(false)}>Sobre Nosotros</Link></li>
          <li><Link to="/servicios" onClick={() => setMenuOpen(false)}>Servicios</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
