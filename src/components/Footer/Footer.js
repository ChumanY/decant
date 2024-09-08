import React, { useEffect, useRef } from "react";
import "./Footer.css";

const Footer = () => {
  const footerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in-section");
          } else {
            entry.target.classList.remove("fade-in-section");
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    const currentFooterRef = footerRef.current;

    if (currentFooterRef) {
      observer.observe(currentFooterRef);
    }

    return () => {
      if (currentFooterRef) {
        observer.unobserve(currentFooterRef);
      }
    };
  }, []);

  return (
    <footer className="footer-component-container" ref={footerRef}>
      <hr className="footer-separator" />
      <div className="footer-content-component">
        <div className="footer-section-component">
          <h2>Local Face</h2>
        </div>
        <div className="footer-section-component footer-contact">
          <p>Contacto</p>
          <p>
            <i className="fas fa-phone-alt"></i> (+51) 123 456 789
          </p>
          <p>
            <i className="fas fa-envelope"></i> pepito@gmail.com
          </p>
        </div>
      </div>
      <div className="footer-credits">
        <p>© 2024 Local Face Inc. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
