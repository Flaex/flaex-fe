import React from "react";
import { Link } from "gatsby";
import { useHabilidades } from "../hooks/use-habilidades";
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

/* eslint-disable */
let faicon = null;
let faprefix = null;

const CategoriaNav = () => {
  const habilidades = useHabilidades();

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
  );
};

export default CategoriaNav;
