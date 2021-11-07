import React, { lazy, Suspense } from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout from "../layouts/default";
import Share from "../components/share";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Seo from "../components/seo";

const renderLoader = () => <p>Cargando</p>;
const Modal = lazy(() => import("../components/modal"));

const Proyecto = ({ data }) => {
  const proyecto = data.proyecto;
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
        title={proyecto.titulo}
        description="Artículos dirigidos a los interesados en aprender o conocer de diseño y tecnologías web."
        image={proyecto.miniatura.url}
      />
      <div className="submenu">
        <div className="navigation navigation--secondary">
          <button
            className="navigation__button"
            onClick={() => window.history.back()}
          >
            &#10229;
          </button>
          <h1 className="detalle__title">{proyecto.titulo}</h1>
        </div>
      </div>
      <div className="detalle">
        <div className="detalle__col-a">
          <GatsbyImage
            className="detalle__imagen"
            image={getImage(proyecto.miniatura.localFile)}
            alt={proyecto.miniatura.alternativeText}
          />
        </div>
        <div className="detalle__col-b">
          <time className="detalle__lugar">
            {proyecto.ciudad} - {proyecto.Ano}
          </time>
          <ReactMarkdown
            className="detalle__descripcion"
            children={proyecto.descripcion}
            remarkPlugins={[remarkGfm]}
            skipHtml={true}
          />

          <div className="detalle__galeria">
            {proyecto.imagenes.map((imagen) => (
              <div className="detalle__item" key={imagen.id}>
                <button
                  className="detalle__button"
                  onClick={() => {
                    const modal = document.getElementById(imagen.id);
                    modal.style.display = "block";
                  }}
                >
                  <GatsbyImage
                    image={getImage(imagen.localFile)}
                    alt={imagen.alternativeText}
                  />
                </button>
                <Suspense fallback={renderLoader()}>
                  <Modal
                    id={imagen.id}
                    imagen={imagen.localFile}
                    onClose={() => {
                      const modal = document.getElementById(imagen.id);
                      modal.style.display = "none";
                    }}
                  />
                </Suspense>
              </div>
            ))}
          </div>        
            <Share
              objeto="proyecto"
              url={viewUrl}
              titulo={proyecto.titulo}
              imagen={proyecto.miniatura.url}
            />         
        </div>
      </div>
    </Layout>
  );
};

export default Proyecto;

export const query = graphql`
  query Proyectos($id: String!) {
    proyecto: strapiProyectos(id: { eq: $id }) {
      id
      titulo
      descripcion
      ciudad
      Ano
      miniatura {
        url
        alternativeText
        localFile {
          childImageSharp {
            gatsbyImageData(
              width: 500
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
      imagenes {
        id
        alternativeText
        localFile {
          childImageSharp {
            gatsbyImageData(
              width: 675
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
    }
  }
`;
