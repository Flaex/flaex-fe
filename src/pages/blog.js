import * as React from "react";
import { Link, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout from "../layouts/default";

const BlogPage = ({ data }) => {
  return (
    <Layout>
      <div className="blog">
        <h1 className="about-me">Blog</h1>
        <ul>
          {data.articulos.edges.map((articulo) => (
            <li key={articulo.node.id}>
              <Link
                to={`/blog/${articulo.node.slug}`}
                rel="noopener noreferrer"
                aria-label={`Ir a ${articulo.node.titulo}`}
              >
                <GatsbyImage
                  image={getImage(articulo.node.imagen.localFile)}
                  alt="Test text"
                />
                <h3>{articulo.node.titulo}</h3>
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
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
      }
    }
  }
`;
