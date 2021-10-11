import React, { useState } from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout from "../layouts/default";
import Share from "../components/share";
import Modal from "../components/modal";

const Proyecto = ({ data }) => {
  const proyecto = data.proyecto;
  const viewUrl = window.location.href;

  const openModal = (ar) => {
    const modal = document.getElementById(`${ar}`);
    modal.style.display = "block";
  };

  const closeModal = (ar) => {
    const modal = document.getElementById(`${ar}`);
    modal.style.display = "none";
  };
  return (
    <Layout>
      <div>
        <button onClick={() => window.history.back()}>&#10229;</button>
        <h1>{proyecto.titulo}</h1>
        <GatsbyImage
          image={getImage(proyecto.miniatura.localFile)}
          alt="Test text"
        />
        <Share
          objeto="proyecto"
          url={viewUrl}
          titulo={proyecto.titulo}
          imagen={proyecto.miniatura.url}
        />
        <time>{proyecto.Ano}</time>
        <p>{proyecto.descripcion}</p>
        <div>
          {proyecto.imagenes.map((imagen) => (
            <div key={imagen.id}>
              <button onClick={openModal(imagen.id)}>
                <GatsbyImage
                  image={getImage(imagen.localFile)}
                  alt="Test text"
                />
              </button>
              <Modal
                id={imagen.id}
                imagen={imagen.localFile}
                onClose={closeModal(imagen.id)}
              />
            </div>
          ))}
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
        localFile {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      imagenes {
        id
        localFile {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`;
