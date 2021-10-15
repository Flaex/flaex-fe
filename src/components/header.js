import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

// Internal page header component

const HeaderPage = () => (
  <header className="header">
    <div className="header__emblem">
      <Link to="/" aria-label="Ir al inicio">
        <StaticImage src="../assets/images/logo.png" alt="Emblema del logo" />
      </Link>      
    </div>
    <div className="header__tag">
      <Link to="/" aria-label="Ir al perfil">
        <StaticImage
          src="../assets/images/tag.png"
          alt="please include an alt"
        />        
      </Link>
    </div>
  </header>
);

export default HeaderPage;
