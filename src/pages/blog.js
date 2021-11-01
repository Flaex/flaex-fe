import * as React from "react";
import { Link, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout from "../layouts/default";
import Seo from "../components/seo";
import "./blog.scss";

const BlogPage = ({ data }) => {
  return (
    <Layout>
      <Seo
        title="Artículos de diseño y desarrollo web"
        description="Artículos dirigidos a los interesados en aprender o conocer de diseño y tecnologías web."
      />
      <h1 className="hidden">Blog</h1>
      <div className="blog">
        <p className="blog__descripcion">
          {data.inicio.edges[0].node.objetivo.descripcion}
        </p>
        <ul className="articulos">
          {data.articulos.edges.map((articulo) => (
            <li className="articulos__item" key={articulo.node.id}>
              <Link
                to={`/blog/${articulo.node.slug}`}
                rel="noopener noreferrer"
                aria-label={`Ir a ${articulo.node.titulo}`}
              >
                <GatsbyImage
                  image={getImage(articulo.node.imagen.localFile)}
                  alt={articulo.node.imagen.alternativeText}
                />
                <h3 className="articulos__titulo">{articulo.node.titulo}</h3>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
};

export default BlogPage;

export const query = graphql`
  query BlogQuery {
    articulos: allStrapiArticulos(sort: { fields: [createdAt], order: DESC }) {
      edges {
        node {
          id
          titulo
          descripcion
          slug
          imagen {
            alternativeText
            localFile {
              childImageSharp {
                gatsbyImageData(
                  width: 438
                  placeholder: BLURRED
                  formats: [AUTO, WEBP, AVIF]
                )
              }
            }
          }
        }
      }
    }
    inicio: allStrapiInicio {
      edges {
        node {
          objetivo {
            titulo
            descripcion
          }
        }
      }
    }
  }
`;
