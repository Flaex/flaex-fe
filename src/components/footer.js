import React from "react";
import { StaticQuery, graphql } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

/* eslint-disable */

let faicon = null;
let faprefix = null;

// Main footer component

const Footer = () => (
  <StaticQuery
    query={graphql`
      query footerQuery {
        contacto: allStrapiContacto {
          edges {
            node {
              plataformas {
                id
                titulo
                icono
                prefix
                descripcion
              }
            }
          }
        }
      }
    `}
    render={(data) => (
      <footer>
        <p>flaex.com - {new Date().getFullYear()}</p>
        <div className="links">
          {data.contacto.edges[0].node.plataformas.map((link) => (
            <div key={link.id}>
              <a
                href={link.descripcion}
                rel="noopener noreferrer"
                target="_blank"
                aria-label={`Ir a ${link.titulo}`}
              >
                <FontAwesomeIcon
                  icon={[
                    (faprefix = link.prefix.replace(/'/g, "")),
                    (faicon = link.icono.replace(/'/g, "")),
                  ]}
                  fixedWidth
                  size="lg"
                />
              </a>
            </div>
          ))}
        </div>
      </footer>
    )}
  />
);

export default Footer;
