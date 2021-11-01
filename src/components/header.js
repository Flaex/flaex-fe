import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

const logoWidth = 150;

const HeaderPage = () => (
  <header className="header">
    <div className="header__emblem">
      <Link to="/" aria-label="Ir al inicio">
        <StaticImage
          width={logoWidth}
          src="../assets/images/logo.png"
          alt="Emblema del logo"
        />
      </Link>
    </div>
    <div className="header__tag">
      <Link to="/" aria-label="Ir al perfil">
        <StaticImage
          width={logoWidth}
          src="../assets/images/tag.png"
          alt="Tag del logo"
        />
      </Link>
    </div>
  </header>
);

export default HeaderPage;
