import React, { lazy, Suspense } from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout from "../layouts/default";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Seo from "../components/seo";

const renderLoader = () => <p>Cargando</p>;
const Share = lazy(() => import("../components/share"));

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
      <Seo title={articulo.titulo} image={articulo.imagen.url} />
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
          <Suspense fallback={renderLoader()}>
            <Share
              objeto="articulo"
              url={viewUrl}
              titulo={articulo.titulo}
              imagen={articulo.imagen.url}
            />
          </Suspense>
        </div>

        <div className="detalle__col-b">
          <time className="detalle__lugar">{articulo.fecha}</time>
          <ReactMarkdown
            className="detalle__descripcion"
            children={articulo.descripcion}
            remarkPlugins={[remarkGfm]}
            skipHtml={false}
            linkTarget="_blank"
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
            )
          }
        }
      }
    }
  }
`;
