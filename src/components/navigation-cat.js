import React from "react";
import { StaticQuery, Link, graphql } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
      <div className="nav__cat">
        {data.perfil.edges[0].node.habilidades.map((habilidad) => (
          <div key={habilidad.id}>
            <Link
              to={`${habilidad.descripcion}`}
              aria-label={`Ir a ${habilidad.titulo}`}
            >
              <FontAwesomeIcon
                icon={[
                  (faprefix = habilidad.prefix.replace(/'/g, "")),
                  (faicon = habilidad.icono.replace(/'/g, "")),
                ]}
                fixedWidth
                size="lg"
              />
              <h3>{habilidad.titulo}</h3>
            </Link>
          </div>
        ))}
      </div>
    )}
  />
);

export default NavigationCat;
