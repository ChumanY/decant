import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css"; // Asegúrate de tener tu archivo CSS en la ruta correcta

function Header() {
  return (
    <header className="header">
      <h1 className="header-title">Local Face</h1>
      <nav className="header-nav">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Inicio
        </NavLink>
        <NavLink
          to="/producto"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Productos
        </NavLink>
        <NavLink
          to="/sobre-nosotros"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Sobre Nosotros
        </NavLink>
        <NavLink
          to="/servicios"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Servicios
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
