import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Default from "../layouts/default";
import Share from "../components/share";
import Form from "../components/innerForm";
import Modal from "../components/modal";
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
    <Default>
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
            {proyecto.ciudad} - {proyecto.ano}
          </time>
          <ReactMarkdown
            className="detalle__descripcion"
            children={proyecto.descripcion.data.descripcion}
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
          <Form titulo="¿Necesitas asesoría?" />
        </div>
      </div>
    </Default>
  );
};

export default Proyecto;

export const Head = ({ data }) => (
  <Seo
    title={data.proyecto.titulo}
    image={data.proyecto.miniatura.url}
    description={data.proyecto.descripcion.data.descripcion
      .replace(/(?:__|[*#])|\[(.*?)\]\(.*?\)/gm, "$1")
      .substring(0, 158)}
  />
);

export const query = graphql`
  query Proyectos($id: String!) {
    proyecto: strapiProyecto(id: { eq: $id }) {
      id
      titulo
      descripcion {
        data {
          descripcion
        }
      }
      ciudad
      ano
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
