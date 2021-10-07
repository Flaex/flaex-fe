import * as React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout from "../layouts/default";

const Proyecto = ({ data }) => {
  const proyecto = data.proyecto;
  return (
    <Layout>
      <div>
        <button onClick={() => window.history.back()}>&#10229;</button>
        <h1>{proyecto.titulo}</h1>
        <GatsbyImage
          image={getImage(proyecto.miniatura.localFile)}
          alt="Test text"
        />
        <time>{proyecto.Ano}</time>
        <p>{proyecto.descripcion}</p>
        <div>
          {proyecto.imagenes.map((imagen) => (
            <div key={imagen.id}>
              <GatsbyImage image={getImage(imagen.localFile)} alt="Test text" />              
            </div>
          ))}
          {console.log(window.history)}
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
