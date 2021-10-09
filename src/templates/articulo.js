import * as React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout from "../layouts/default";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const Articulo = ({ data }) => {
  const articulo = data.articulo;
  return (
    <Layout>
      <div>
        <button onClick={() => window.history.back()}>&#10229;</button>
        <h1>{articulo.titulo}</h1>
        <GatsbyImage
          image={getImage(articulo.imagen.localFile)}
          alt="Test text"
        />
        <time>{articulo.fecha}</time>
        <ReactMarkdown
          children={articulo.descripcion}
          remarkPlugins={[remarkGfm]}
          skipHtml={true}
        />
      </div>
    </Layout>
  );
};

export default Articulo;

export const query = graphql`
  query Articulos($id: String!) {
    articulo: strapiArticulos(id: { eq: $id }) {
      fecha
      titulo
      descripcion
      imagen {
        localFile {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`;
