import React, { useState } from "react";
import { Link, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout from "../layouts/default";
import Navcat from "../components/navigation-cat";
import Seo from "../components/seo";
import "./categoria.scss";

const Categoria = ({ data }) => {
  const proyectos = data.categoria.proyectos;
  const categoria = data.categoria;

  /* eslint-disable */
  let [faicon, faprefix] = useState(0);

  return (
    <Layout>
      <Seo title="Portafolio de Freddy Polania | @Flaex_" description={`Proyectos de ${ data.categoria.slug}`} />
      <div className="submenu">
        <Navcat />
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
          alternativeText
          localFile {
            childImageSharp {
              gatsbyImageData(
                width: 300
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
              )
            }
          }
        }
      }
    }
  }
`;
