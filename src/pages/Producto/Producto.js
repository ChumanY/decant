import React from "react";
import { Link } from "react-router-dom";
import "../Producto/Producto.css";

const Productos = () => {
  return (
    <div className="productos-container">
      <h2 className="productos-title">Productos</h2>
      <hr className="title-divider" />
      <div className="productos-list">
        <Link to="/producto/premium" className="producto-card premium-card">
          <img
            src="/images/productPage/premium-icon.webp"
            alt="Premium"
            style={{ width: "100px", height: "auto" }}
          />
          <p>PREMIUM</p>
        </Link>
        <Link to="/producto/business" className="producto-card business-card">
          <img
            src="/images/productPage/business-icon.webp"
            alt="Business"
            style={{ width: "100px", height: "auto" }}
          />
          <p>BUSINESS</p>
        </Link>
        <Link to="/producto/standard" className="producto-card standard-card">
          <img
            src="/images/productPage/standard-icon.webp"
            alt="Standard"
            style={{ width: "130px", height: "auto" }}
          />
          <p>STANDARD</p>
        </Link>
      </div>
    </div>
  );
};

export default Productos;
