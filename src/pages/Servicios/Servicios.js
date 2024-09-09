import React, { useEffect, useRef } from "react";
import "../Servicios/Servicios.css";
import service1 from "../../images/servicesPage/service1.jpg";
import service2 from "../../images/servicesPage/service2.jpg";

const Servicios = () => {
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
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      currentSections.forEach((section) => {
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, []);

  return (
    <div className="servicios-container">
      <section
        className="intro-section-service"
        ref={(el) => (sectionsRef.current[0] = el)}
      >
        <div className="overlay">
          <h1>Nuestros Servicios</h1>
          <p>
            En Local Face, estamos dedicados a ofrecerte una experiencia de
            compra de perfumes encantadora e inmersiva. Nuestros servicios están
            diseñados para asegurarnos de que encuentres la fragancia perfecta
            que complemente tu personalidad y estilo únicos. Nos enorgullece
            ofrecer una gama de servicios que van más allá de simplemente vender
            perfumes, con el objetivo de hacer que tu viaje con nosotros sea
            realmente especial.
          </p>
        </div>
      </section>

      <section
        className="middle-section right-text-left-image"
        ref={(el) => (sectionsRef.current[1] = el)}
      >
        <div className="content-wrapper">
          <div className="text-section">
            <span className="section-number">01.</span>
            <h2 className="section-title">
              Consultas Personalizadas de Fragancias
            </h2>
            <p className="section-paragraph">
              Elegir la fragancia adecuada puede ser una experiencia
              profundamente personal. Nuestro equipo de expertos en fragancias
              está aquí para guiarte en este proceso. Ya sea que estés buscando
              una fragancia distintiva, un regalo para un ser querido, o
              necesites asistencia para explorar nuevas familias de fragancias,
              nuestros consultores se tomarán el tiempo para entender tus
              preferencias y sugerir las combinaciones perfectas.
            </p>
          </div>
          <img
            src={service1}
            alt="Descripción de la imagen"
            className="image-section"
          />
        </div>
      </section>

      <section
        className="middle-section left-image-right-text"
        ref={(el) => (sectionsRef.current[2] = el)}
      >
        <div className="content-wrapper">
          <div className="text-section">
            <span className="section-number">02.</span>
            <h2 className="section-title">
              Creación de Fragancias Personalizadas
            </h2>
            <p className="section-paragraph">
              Experimenta el arte de la perfumería a medida con nuestro servicio
              de creación de fragancias personalizadas. Trabaja en estrecha
              colaboración con nuestros perfumistas expertos para elaborar una
              fragancia que sea únicamente tuya. Desde la selección de notas
              individuales hasta su combinación en una sinfonía armoniosa, te
              ayudaremos a dar vida a tu visión de fragancia. Ya sea para una
              ocasión especial, un regalo para alguien querido, o simplemente
              como una forma de disfrutar del lujo, un perfume creado a medida
              es una experiencia inolvidable.
            </p>
          </div>
          <img
            src={service2}
            alt="Descripción de la imagen"
            className="image-section"
          />
        </div>
      </section>

      <section
        className="footer-section"
        ref={(el) => (sectionsRef.current[3] = el)}
      >
        <div className="footer-content">
          <p>
            En Local Face, nuestra pasión por la perfumería nos impulsa a ir más
            allá para servirte mejor. Te invitamos a experimentar nuestros
            servicios excepcionales y sumergirte en el mundo de los aromas
            lujosos. Permítenos ser tu destino de fragancias de confianza, donde
            tus sueños olfativos se hacen realidad.
            <br />
            <br />
            Si tienes alguna pregunta o necesitas asistencia, no dudes en
            contactar a nuestro amable equipo. Estamos aquí para hacer que tu
            exploración de fragancias sea verdaderamente memorable.
            <br />
            <br />
            Tu equipo de Local Face
          </p>
        </div>
      </section>
    </div>
  );
};

export default Servicios;
