import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Standard.css";
import productData from "./productos_standard.json"; // Make sure this path is correct
import standardIcon from "./../../../../images/productPage/standard-icon.webp";

const Standard = () => {
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
    <div className="standard-page">
      <div className="standard-product-buttons">
        <Link
          to="/producto/premium"
          className="standard-product-button premium"
        >
          PREMIUM
        </Link>
        <Link
          to="/producto/business"
          className="standard-product-button business"
        >
          BUSINESS
        </Link>
        <Link
          to="/producto/standard"
          className="standard-product-button standard"
        >
          STANDARD
        </Link>
      </div>
      <hr className="standard-divider-line" />
      {/* Render the current product cards */}
      <div className="standard-product-cards-container">
        {currentProducts.map((product) => (
          <div key={product.id} className="standard-product-card">
            <img
              src={standardIcon}
              alt={product.name}
              className="standard-product-image"
            />
            <h3>{product.name}</h3>
            <button className="standard-learn-more-button">
              {product.buttonText}
            </button>
          </div>
        ))}
      </div>

      {/* Pagination buttons */}
      {totalPages > 1 && (
        <div className="standard-pagination">
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index + 1}
              onClick={() => paginate(index + 1)}
              className={`standard-pagination-button ${
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

export default Standard;
