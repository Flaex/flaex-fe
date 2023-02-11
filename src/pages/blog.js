import * as React from "react";
import { Link, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Page from "../layouts/page";
import Seo from "../components/seo";
import "../assets/scss/pages/blog.scss";

const blog =
  "Guías y artículos de diseño gráfico, desarrollo y tecnologías web.";

const BlogPage = ({ data }) => {
  const articulos = data.articulos.nodes;
  return (
    <Page>
      <div className="blog">
        <h1 className="hidden">Blog</h1>
        <p className="blog__descripcion">{blog}</p>
        {console.log(articulos)}
        <ul className="articulos">
          {articulos.map((articulo) => (
            <li className="articulos__item" key={articulo.id}>
              <Link
                to={`/blog/${articulo.slug}`}
                rel="noopener noreferrer"
                aria-label={`Ir a ${articulo.titulo}`}
              >
                <GatsbyImage
                  image={getImage(articulo.imagen.localFile)}
                  alt={articulo.imagen.alternativeText}
                />
                <h3 className="articulos__titulo">{articulo.titulo}</h3>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Page>
  );
};

export default BlogPage;

export const Head = ({ blog }) => (
  <Seo title="Artículos de diseño y desarrollo web" description={blog} />
);

export const query = graphql`
  query Blog {
    articulos: allStrapiArticulo(sort: { createdAt: DESC }) {
      nodes {
        id
        titulo
        descripcion {
          data {
            descripcion
          }
        }
        slug
        imagen {
          alternativeText
          localFile {
            childImageSharp {
              gatsbyImageData(width: 455)
            }
          }
        }
      }
    }
  }
`;
