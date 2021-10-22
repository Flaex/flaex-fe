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
      <div className="submenu">
        <div className="navigation">
          <button onClick={() => window.history.back()}>&#10229;</button>
          <h1 className="detalle__title">{articulo.titulo}</h1>
        </div>
      </div>
      <div className="detalle">
        <div className="detalle__col-a">
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
        </div>

        <div className="detalle__col-b">
          <time>{articulo.fecha}</time>
          <ReactMarkdown
            children={articulo.descripcion}
            remarkPlugins={[remarkGfm]}
            skipHtml={true}
          />
        </div>
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
            gatsbyImageData(
              width: 420
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
    }
  }
`;
