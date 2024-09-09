import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Premium.css";
import productData from "./productos_premium.json"; // Make sure this path is correct
import premiumIcon from "./../../../../images/productPage/premium-icon.webp";

const Premium = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 9; // 3 products per row, 3 rows per page = 9 products per page

  useEffect(() => {
    setProducts(productData); // Simulate fetching the JSON data
  }, []);

  // Get the current products for the current page
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Calculate total pages
  const totalPages = Math.ceil(products.length / productsPerPage);

  return (
    <div className="premium-page">
      <div className="premium-product-buttons">
        <Link to="/producto/premium" className="premium-product-button premium">
          PREMIUM
        </Link>
        <Link
          to="/producto/business"
          className="premium-product-button business"
        >
          BUSINESS
        </Link>
        <Link
          to="/producto/standard"
          className="premium-product-button standard"
        >
          STANDARD
        </Link>
      </div>
      <hr className="premium-divider-line" />
      {/* Render the current product cards */}
      <div className="premium-product-cards-container">
        {currentProducts.map((product) => (
          <div key={product.id} className="premium-product-card">
            <img
              src={premiumIcon}
              alt={product.name}
              className="premium-product-image"
            />
            <h3>{product.name}</h3>
            <button className="premium-learn-more-button">
              {product.buttonText}
            </button>
          </div>
        ))}
      </div>

      {/* Pagination buttons */}
      {totalPages > 1 && (
        <div className="premium-pagination">
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index + 1}
              onClick={() => paginate(index + 1)}
              className={`premium-pagination-button ${
                currentPage === index + 1 ? "active" : ""
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Premium;
