import React, { useState } from "react";
import { Link, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Default from "../layouts/default";
import Catnav from "../components/categoria-nav";
import Seo from "../components/seo";
import "../assets/scss/templates/categoria.scss";


const Categoria = ({ data }) => {
  const proyectos = data.categoria.proyectos;
  const categoria = data.categoria;

  /* eslint-disable */
  let [faicon, faprefix] = useState(0);

  return (
    <Default>
      <div className="submenu">
        <Catnav />
      </div>
      <ul className="categorias">
        {proyectos.map((proyecto) => {
          return (
            <li key={proyecto.id} className="categorias__item">
              <Link
                to={`/portafolio/${categoria.slug}/${proyecto.slug}`}
                rel="noopener noreferrer"
                aria-label={`Ir a ${proyecto.titulo}`}
              >
                <GatsbyImage
                  image={getImage(proyecto.miniatura.localFile)}
                  alt={proyecto.miniatura.alternativeText}
                />
              </Link>
            </li>
          );
        })}
      </ul>
    </Default>
  );
};

export default Categoria;

export const Head = ({ data }) => (
  <Seo
    title="Portafolio de Freddy Polania"
    description={`Proyectos de ${data.categoria.slug}`}
  />
);

export const query = graphql`
  query Categoria($id: String!) {
    categoria: strapiCategoria(id: { eq: $id }) {
      titulo
      icono
      slug
      proyectos {
        id
        titulo
        descripcion {
          data {
            descripcion
          }
        }
        slug
        miniatura {
          alternativeText
          localFile {
            childImageSharp {
              gatsbyImageData(width: 300)
            }
          }
        }
      }
    }
  }
`;
