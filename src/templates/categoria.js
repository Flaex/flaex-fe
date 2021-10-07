import React, { useState } from "react";
import { Link, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout from "../layouts/default";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Navcat from "../components/navigation-cat";

const Categoria = ({ data }) => {
  const proyectos = data.categoria.proyectos;
  const categoria = data.categoria
  const faIcon = data.categoria.icono;
  /* eslint-disable */
  let [faicon, faprefix] = useState(0);

  return (
    <Layout>
      <button onClick={() => window.history.back()}>&#10229;</button>
      <Navcat />
      <h1 id={data.categoria.id}>
        <FontAwesomeIcon
          icon={[(faprefix = "fas"), (faicon = faIcon.replace(/'/g, ""))]}
          fixedWidth
          size="lg"
        />
        {categoria.titulo}
      </h1>
      <ul>
        {proyectos.map((proyecto) => {
          return (
            <div key={proyecto.id}>
              <Link
                to={`/portafolio/${categoria.slug}/${proyecto.slug}`}
                rel="noopener noreferrer"
                aria-label={`Ir a ${proyecto.titulo}`}
              >
                <li>
                  <GatsbyImage
                    image={getImage(proyecto.miniatura.localFile)}
                    alt="Test text"
                  />
                </li>
              </Link>
            </div>
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
