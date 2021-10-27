import React from "react";
import { StaticQuery, Link, graphql } from "gatsby";
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

// Main footer component

const NavigationCat = () => (
  <StaticQuery
    query={graphql`
      query NavvigationCat {
        perfil: allStrapiPerfil {
          edges {
            node {
              habilidades {
                id
                titulo
                icono
                prefix
                icono
                descripcion
              }
            }
          }
        }
      }
    `}
    render={(data) => (
      <div className="navigation navigation--secondary">
        <button onClick={() => window.history.back()}>&#10229;</button>
        {data.perfil.edges[0].node.habilidades.map((habilidad) => (
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
                size="lg"
              />
              {habilidad.titulo}
            </h3>
          </Link>
        ))}
      </div>
    )}
  />
);

export default NavigationCat;
