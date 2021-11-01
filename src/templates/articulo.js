import * as React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout from "../layouts/default";
import Share from "../components/share";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Seo from "../components/seo";

const Articulo = ({ data }) => {
  const articulo = data.articulo;
  const isBrowser = typeof window !== "undefined";
  const viewUrl = () => {
    if (!isBrowser) {
      return;
    }
    return window.location.href;
  };

  return (
    <Layout>
      <Seo
        title={articulo.titulo}
        description="Artículos dirigidos a los interesados en conocer de diseño gráfico, diseño y desarrollo web por medio de contenido relacionado a las tecnologías web."
        image={articulo.imagen.url}
      />
      <div className="submenu">
        <div className="navigation navigation--secondary">
          <button onClick={() => window.history.back()}>&#10229;</button>
          <h1 className="detalle__title">{articulo.titulo}</h1>
        </div>
      </div>
      <div className="detalle">
        <div className="detalle__col-a">
          <GatsbyImage
            image={getImage(articulo.imagen.localFile)}
            alt={articulo.imagen.alternativeText}
          />
          <Share
            objeto="articulo"
            url={viewUrl}
            titulo={articulo.titulo}
            imagen={articulo.imagen.url}
          />
        </div>

        <div className="detalle__col-b">
          <time className="detalle__lugar">{articulo.fecha}</time>
          <ReactMarkdown
            className="detalle__descripcion"
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
      fecha(formatString: "DD MMMM YYYY", locale: "es-es")
      titulo
      descripcion
      imagen {
        url
        alternativeText
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
