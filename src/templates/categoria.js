import React, { useState } from "react";
import { Link, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout from "../layouts/default";
import Navcat from "../components/navigation-cat";
import "./categoria.scss";

const Categoria = ({ data }) => {
  const proyectos = data.categoria.proyectos;
  const categoria = data.categoria;

  /* eslint-disable */
  let [faicon, faprefix] = useState(0);

  return (
    <Layout>
      <div className="submenu">
        <Navcat />
      </div>
      <ul className="categorias">
        {proyectos.map((proyecto) => {
          return (
            <li className="categorias__item">
              <Link
                to={`/portafolio/${categoria.slug}/${proyecto.slug}`}
                key={proyecto.id}
                rel="noopener noreferrer"
                aria-label={`Ir a ${proyecto.titulo}`}
              >
                <GatsbyImage
                  image={getImage(proyecto.miniatura.localFile)}
                  alt="Test text"
                />
              </Link>
            </li>
          );
        })}
      </ul>
    </Layout>
  );
};

export default Categoria;

export const query = graphql`
  query Categoria($id: String!) {
    categoria: strapiCategorias(id: { eq: $id }) {
      titulo
      icono
      slug
      proyectos {
        id
        titulo
        descripcion
        slug
        miniatura {
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  }
`;
