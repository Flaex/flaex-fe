import React from "react";
import { Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const activeStyles = {
  backgroundColor: "#ffffff",
  backgroundImage: "none",
  color: "#1a1a1a",
  border: "1px",
  borderColor: "#1a1a1a",
  borderStyle: "solid",
};

const linkStyles = {};

const habilidades = [
  {
    id: "0",
    titulo: "Logotipos",
    icono: "pencil-ruler",
    prefix: "fas",
    descripcion: "/portafolio/logotipos/",
  },
  {
    id: "1",
    titulo: "Branding",
    icono: "palette",
    prefix: "fas",
    descripcion: "/portafolio/branding/",
  },
  {
    id: "2",
    titulo: "Web",
    icono: "file-code",
    prefix: "fas",
    descripcion: "/portafolio/web/",
  },
  {
    id: "3",
    titulo: "Fonticons",
    icono: "icons",
    prefix: "fas",
    descripcion: "/portafolio/fonticons/",
  },
];



/* eslint-disable */
let faicon = null;
let faprefix = null;

const CategoriaNav = () => {
  return (
    <div className="navigation navigation--secondary">
    <button onClick={() => window.history.back()}>&#10229;</button>
 
    {habilidades.map((habilidad) => (
      <Link
        className="navigation__category"
        to={`${habilidad.descripcion}`}
        key={habilidad.id}
        activeStyle={activeStyles}
        getProps={({ isPartiallyCurrent }) =>
          isPartiallyCurrent
            ? { style: { ...linkStyles, ...activeStyles } }
            : null
        }
        aria-label={`Ir a ${habilidad.titulo}`}
      >
        <h3>
          <FontAwesomeIcon
            icon={[
              (faprefix = habilidad.prefix.replace(/'/g, "")),
              (faicon = habilidad.icono.replace(/'/g, "")),
            ]}
            fixedWidth
            size="sm"
          />
          {habilidad.titulo}
        </h3>
      </Link>
    ))}
  </div>
  )
};

export default CategoriaNav;
