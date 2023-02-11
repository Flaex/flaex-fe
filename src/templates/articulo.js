import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Page from "../layouts/page";
import Share from "../components/share";
import Form from "../components/innerForm";
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
    <Page>
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
            url={viewUrl()}
            titulo={articulo.titulo}
            imagen={articulo.imagen.url}
          />
        </div>

        <div className="detalle__col-b">
          <time className="detalle__lugar">{articulo.fecha}</time>
          <ReactMarkdown
            className="detalle__descripcion"
            children={articulo.descripcion.data.descripcion}
            remarkPlugins={[remarkGfm]}
            skipHtml={false}
            linkTarget="_blank"
          />
          <Form titulo="¿Tienes algún comentario, sugerencia o pregunta?" />
        </div>
      </div>
    </Page>
  );
};

export default Articulo;

export const Head = ({ data }) => (
  <Seo
    title={data.articulo.titulo}
    image={data.articulo.imagen.url}
    description={data.articulo.descripcion.data.descripcion
      .replace(/(?:__|[*#])|\[(.*?)\]\(.*?\)/gm, "$1")
      .substring(0, 158)}
  />
);

export const query = graphql`
  query Articulos($id: String!) {
    articulo: strapiArticulo(id: { eq: $id }) {
      fecha(formatString: "DD MMMM YYYY", locale: "es-es")
      titulo
      descripcion {
        data {
          descripcion
        }
      }
      imagen {
        url
        alternativeText
        localFile {
          childImageSharp {
            gatsbyImageData(width: 512)
          }
        }
      }
    }
  }
`;
