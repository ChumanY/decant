import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Asegúrate de crear este archivo para los estilos

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        {/* Puedes usar una imagen o texto como logo */}
        <img src="/path/to/logo.png" alt="Company Logo" />
        {/* O simplemente */}
        <span>Nombre de la Empresa</span>
      </div>
      <nav className="nav">
        <ul>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/producto">Producto</Link></li>
          <li><Link to="/sobre-nosotros">Sobre Nosotros</Link></li>
          <li><Link to="/servicios">Servicios</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
