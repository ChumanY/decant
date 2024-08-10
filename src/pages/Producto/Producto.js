import React from "react";
import "../Producto/Producto.css";

const Productos = () => {
  return (
    <div className="productos-container">
      <h2 className="productos-title">Productos</h2>
      <hr className="title-divider" />
      <div className="productos-list">
        <div className="producto-card premium-card">
          <img
            src="/images/productPage/premium-icon.webp"
            alt="Premium"
            style={{ width: "100px", height: "auto" }}
          />
          <p>PREMIUM</p>
        </div>
        <div className="producto-card business-card">
          <img
            src="/images/productPage/business-icon.webp"
            alt="Business"
            style={{ width: "100px", height: "auto" }}
          />
          <p>BUSINESS</p>
        </div>
        <div className="producto-card standard-card">
          <img
            src="/images/productPage/standard-icon.webp"
            alt="Standard"
            style={{ width: "130px", height: "auto" }}
          />
          <p>STANDARD</p>
        </div>
      </div>
    </div>
  );
};

export default Productos;
