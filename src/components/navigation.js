import React from "react";
import { Link } from "gatsby";

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
  <nav>
    <Link
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
      to="/contact"
      activeStyle={activeStyles}
      aria-label="Ir a la información de contacto"
    >
      <span>contacto</span>
    </Link> */}
  </nav>
);

export default Navigation;
