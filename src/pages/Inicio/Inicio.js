import React, { useEffect, useRef } from "react";
import "../Inicio/Inicio.css"; // Asegúrate de que la ruta a los estilos CSS sea correcta
import { NavLink } from "react-router-dom";

const Inicio = () => {
  const sectionsRef = useRef([]);

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

    const currentSections = sectionsRef.current;

    currentSections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      currentSections.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="inicio-container">
      <section
        className="hero-section"
        ref={(el) => (sectionsRef.current[0] = el)}
      >
        <div className="hero-content">
          <h1>¡Eleva tu espíritu con Fragancias de Victoria!</h1>
          <p>
            Compra ahora y disfruta del dulce aroma de la victoria con Local
            Face.
          </p>
          <button className="discover-button">
            <NavLink
              to="/producto"
              className={({ isActive }) =>
                isActive ? "nav-link-product active" : "nav-link-product"
              }
            >
              Descubre nuestros productos
            </NavLink>
          </button>
        </div>
        <img
          src="/images/inicioPage/inicio1.webp"
          alt="Fragancias de Victoria"
          className="hero-image"
        />
      </section>
      <section
        className="intro-section-inicio"
        ref={(el) => (sectionsRef.current[1] = el)}
      >
        <div className="inicio-content">
          <h2>Bienvenidos a Local Face</h2>
          <p>
            Bienvenidos a Perfumes Local Face, donde el espíritu de victoria y
            triunfo cobra vida a través de aromas que empoderan e inspiran.
            Nuestra colección cuidadosamente curada, acertadamente llamada
            "Victory Scented," es una celebración del éxito y la elegancia,
            diseñada para desatar tu esencia victoriosa. Deléitate en el dulce
            sabor del triunfo con fragancias cautivadoras que narran la historia
            de tus logros. En Local Face, creemos que cada victoria merece un
            aroma distintivo, y estamos dedicados a proporcionar fragancias
            inolvidables que elevan tu espíritu y potencian tu viaje.
          </p>
        </div>
      </section>
      <section
        className="middle-inicio"
        ref={(el) => (sectionsRef.current[2] = el)}
      >
        <div className="content-wrapper-inicio">
          <div className="text-section-inicio">
            <h2 className="section-title-inicio">Nuestros Valores</h2>
            <p className="section-paragraph-inicio">
              En Local Face, nuestra tienda de perfumes se basa en una fundación
              de pasión y autenticidad. Creemos en celebrar la individualidad de
              cada cliente, proporcionando una colección diversa de aromas que
              resuenan con su personalidad y estilo únicos. Nuestro dedicado
              equipo de entusiastas de las fragancias está comprometido a crear
              un ambiente acogedor e inclusivo, donde se forjan conexiones y la
              inspiración prospera.
            </p>
            <p className="section-paragraph-inicio">
              Abrazando la sostenibilidad y el aprendizaje continuo, Local Face
              aspira a ser más que un simple destino de compras; somos una
              comunidad que inspira y empodera a las personas en su viaje por el
              mundo de las fragancias.
            </p>
          </div>
          <img
            src="images/inicioPage/inicio3.jpg"
            alt="Descripción de la imagen"
            className="image-section-inicio"
          />
        </div>
      </section>

      <section
        className="collection-section"
        ref={(el) => (sectionsRef.current[3] = el)}
      >
        <h2 className="collection-title">Nuestras Colecciones</h2>{" "}
        {/* Título de la sección */}
        <div className="collections-grid">
          <div className="collection-item large">
            <img
              src="images/inicioPage/inicio5.webp"
              alt="Delicias de Diseñador"
            />
          </div>
          <div className="collection-item medium">
            <img
              src="images/inicioPage/inicio7.webp"
              alt="Esenciales de Viaje"
            />
          </div>
          <div className="collection-item small">
            <img src="images/inicioPage/inicio8.jpg" alt="Ocasión Perfecta" />
          </div>
          <div className="collection-item small">
            <img
              src="images/inicioPage/inicio4.webp"
              alt="Serenata Aromática"
            />
          </div>
          <div className="collection-item medium">
            <img src="images/inicioPage/inicio6.webp" alt="Tesoros Vintage" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Inicio;
