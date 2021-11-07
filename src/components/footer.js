import React from "react";
import { StaticQuery, graphql } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./footer.scss";

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
      <footer className="footer">
        <p>flaex.com - {new Date().getFullYear()}</p>
        <div className="footer__rrss">
          {data.contacto.edges[0].node.plataformas.map((link) => (
            <a
              className="footer__link"
              key={link.id}
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
                size="1x"
              />
            </a>
          ))}
        </div>
      </footer>
    )}
  />
);

export default Footer;
