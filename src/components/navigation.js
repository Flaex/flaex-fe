import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import "../assets/scss/components/navigation.scss";

const activeStyles = {
  backgroundColor: "#ffffff",
  backgroundImage: "none",
  color: "#1a1a1a",
  border: "1px",
  borderColor: "#1a1a1a",
  borderStyle: "solid",
};

const linkStyles = {};

// Main page navigation component

const Navigation = () => (
  <nav className="navigation">
    <Link to="/" aria-label="Ir al inicio">
      <StaticImage
        className="navigation__link"
        src="https://res.cloudinary.com/flaex/image/upload/v1676256333/strapi-v4/logo_0ba8e72ea4.webp"
        alt="Logotipo @flaex_"
      />
    </Link>
    <Link
      className="navigation__link"
      to="/portafolio"
      activeStyle={activeStyles}
      getProps={({ isPartiallyCurrent }) =>
        isPartiallyCurrent
          ? { style: { ...linkStyles, ...activeStyles } }
          : null
      }
      aria-label="Ir al portafolio de diseño gráfico"
    >
      <span>portafolio</span>
    </Link>
    <Link
      className="navigation__link"
      to="/blog"
      activeStyle={activeStyles}
      getProps={({ isPartiallyCurrent }) =>
        isPartiallyCurrent
          ? { style: { ...linkStyles, ...activeStyles } }
          : null
      }
      aria-label="Ir a la información de contacto"
    >
      <span>blog</span>
    </Link>
    <Link
      className="navigation__link"
      to="/perfil"
      activeStyle={activeStyles}
      getProps={({ isPartiallyCurrent }) =>
        isPartiallyCurrent
          ? { style: { ...linkStyles, ...activeStyles } }
          : null
      }
      aria-label="Ir al portafolio de desarrollo front-end"
    >
      <span>perfil</span>
    </Link>
    {/* <Link
      className="navigation__link"
      to="/contacto"
      activeStyle={activeStyles}
      getProps={({ isPartiallyCurrent }) =>
        isPartiallyCurrent
          ? { style: { ...linkStyles, ...activeStyles } }
          : null
      }
      aria-label="Ir a la información de contacto"
    >
      <span>contacto</span>
    </Link> */}
  </nav>
);

export default Navigation;
