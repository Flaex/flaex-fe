import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout from "../layouts/default";
import Modal from "../components/modal";
import Share from "../components/share";
import Form from "../components/innerForm";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Seo from "../components/seo";

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
        image={proyecto.miniatura.url}
        description={proyecto.descripcion
          .replace(/(?:__|[*#])|\[(.*?)\]\(.*?\)/gm, "$1")
          .substring(0, 158)}
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
          <Share
            objeto="proyecto"
            url={viewUrl()}
            titulo={proyecto.titulo}
            imagen={proyecto.miniatura.url}
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
            linkTarget="_blank"
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
                <Modal
                  id={imagen.id}
                  imagen={imagen.localFile}
                  onClose={() => {
                    const modal = document.getElementById(imagen.id);
                    modal.style.display = "none";
                  }}
                />
              </div>
            ))}
          </div>
          <Form titulo="??Necesitas asesor??a? ??Quieres trabajar conmigo?" />
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
            gatsbyImageData(width: 500)
          }
        }
      }
      imagenes {
        id
        alternativeText
        localFile {
          childImageSharp {
            gatsbyImageData(width: 675)
          }
        }
      }
    }
  }
`;
