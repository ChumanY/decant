import React, { useEffect, useRef } from "react";
import "../Inicio/Inicio.css";
import { NavLink } from "react-router-dom";
import inicio1 from "../../images/inicioPage/inicio1.webp";
import inicio3 from "../../images/inicioPage/inicio3.jpg";
import inicio4 from "../../images/inicioPage/inicio4.webp";
import inicio5 from "../../images/inicioPage/inicio5.webp";
import inicio6 from "../../images/inicioPage/inicio6.webp";
import inicio7 from "../../images/inicioPage/inicio7.webp";
import inicio8 from "../../images/inicioPage/inicio8.jpg";

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
          src={inicio1}
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
            src={inicio3}
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
            <img src={inicio5} alt="Delicias de Diseñador" />
          </div>
          <div className="collection-item medium">
            <img src={inicio7} alt="Esenciales de Viaje" />
          </div>
          <div className="collection-item small">
            <img src={inicio8} alt="Ocasión Perfecta" />
          </div>
          <div className="collection-item small">
            <img src={inicio4} alt="Serenata Aromática" />
          </div>
          <div className="collection-item medium">
            <img src={inicio6} alt="Tesoros Vintage" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Inicio;
