import React, { useEffect, useRef } from "react";
import Slider from "react-slick";
import "../SobreNosotros/SobreNosotros.css";
import carousel1 from "../../images/aboutUsPage/carousel1.jpg";
import carousel4 from "../../images/aboutUsPage/carousel4.jpg";
import carousel5 from "../../images/aboutUsPage/carousel5.jpg";

const SobreNosotros = () => {
  const configuracion = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

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
    <div className="sobre-nosotros-container">
      <section
        className="intro-section"
        ref={(el) => (sectionsRef.current[0] = el)}
      >
        <div className="overlay">
          <h1>Sobre Nosotros</h1>
          <p>
            Somos una empresa dedicada a la creación de experiencias olfativas
            únicas, combinando ingredientes de la más alta calidad para crear
            perfumes inolvidables. Nuestro compromiso es con la excelencia y la
            innovación en cada fragancia que desarrollamos.
          </p>
        </div>
      </section>

      <section
        className="slider-section"
        ref={(el) => (sectionsRef.current[1] = el)}
      >
        <Slider {...configuracion}>
          <div>
            <img src={carousel1} alt="Imagen 1" className="slider-image" />
          </div>
          <div>
            <img src={carousel5} alt="Imagen 2" className="slider-image" />
          </div>
          <div>
            <img src={carousel4} alt="Imagen 3" className="slider-image" />
          </div>
        </Slider>
      </section>

      <section
        className="unique-section"
        ref={(el) => (sectionsRef.current[2] = el)}
      >
        <h2>Qué Nos Hace Únicos</h2>
        <div className="unique-content">
          <div className="unique-item">
            <h3>Inspirados Localmente</h3>
            <p>
              Nuestros perfumes están meticulosamente elaborados para reflejar
              la herencia cultural, las tradiciones y los paisajes de diversas
              regiones. Desde las vibrantes calles de Marrakech hasta los
              serenos jardines de cerezos en flor de Kioto, cada fragancia
              cuenta una historia única que resuena con su origen.
            </p>
          </div>
          <div className="unique-item">
            <h3>Ingredientes de Alta Calidad</h3>
            <p>
              Creemos que la clave para un aroma extraordinario radica en la
              calidad de los ingredientes. Por eso colaboramos con expertos
              perfumistas que obtienen los materiales más finos y de origen
              ético de todo el mundo. Nunca comprometemos la calidad de nuestros
              productos, asegurando una experiencia lujosa y duradera.
            </p>
          </div>
          <div className="unique-item">
            <h3>Servicio Personalizado</h3>
            <p>
              Entendemos que elegir la fragancia perfecta es una experiencia
              profundamente personal. Nuestro equipo de expertos en fragancias
              siempre está listo para ayudarte a encontrar una fragancia que
              complemente tu personalidad y estilo. Ya sea que estés explorando
              nuevos aromas o buscando redescubrir un viejo favorito, estamos
              aquí para guiarte en cada paso del camino.
            </p>
          </div>
        </div>
      </section>

      <section
        className="unique-footer"
        ref={(el) => (sectionsRef.current[3] = el)}
      >
        <p>
          Únete a nosotros en esta aventura olfativa mientras celebramos la
          diversa gama de aromas de todo el mundo. Descubre los cautivadores
          aromas que abrazan la esencia de las culturas locales y conecta con la
          belleza de nuestra humanidad compartida.
        </p>
        <p>Gracias por ser parte de nuestro viaje.</p>
        <p>
          Con amor y gratitud,
          <br />
          El equipo de Local Face Perfumes
        </p>
      </section>
    </div>
  );
};

export default SobreNosotros;
