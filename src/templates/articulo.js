import * as React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout from "../layouts/default";
import Share from "../components/share";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const Articulo = ({ data }) => {
  const articulo = data.articulo;
  const viewUrl = window.location.href;
  return (
    <Layout>
      <div>
        <button onClick={() => window.history.back()}>&#10229;</button>
        <h1>{articulo.titulo}</h1>
        <GatsbyImage
          image={getImage(articulo.imagen.localFile)}
          alt="Test text"
        />
        <Share
          objeto="articulo"
          url={viewUrl}
          titulo={articulo.titulo}
          imagen={articulo.imagen.url}
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
        url
        localFile {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`;
