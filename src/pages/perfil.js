import React, { useState } from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout from "../layouts/default";
import Tabs from "../components/tabs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Seo from "../components/seo";

const PerfilPage = ({ data }) => {
  /* eslint-disable */
  let [faicon, faprefix] = useState(0);

  const array = [
    data.perfil.edges[0].node.formacion,
    data.perfil.edges[0].node.experiencia,
  ];

  return (
    <Layout>
      <Seo description={data.perfil.edges[0].node.meta[0].value} />
      <div className="perfil">
        <GatsbyImage
          image={getImage(data.inicio.edges[0].node.imagen.localFile)}
          alt="Test text"
        />
        <h1 className="about-me">Perfil</h1>
        <h2>{data.perfil.edges[0].node.intro.titulo}</h2>
        <p>{data.perfil.edges[0].node.intro.descripcion}</p>

        <h2>{data.perfil.edges[0].node.flaex.titulo}</h2>
        <p>{data.perfil.edges[0].node.flaex.descripcion}</p>

        <div className="portafolio">
          <h2>Habilidades</h2>
          {data.perfil.edges[0].node.habilidades.map((skill) => (
            <div key={skill.id}>
              <FontAwesomeIcon
                icon={[
                  (faprefix = skill.prefix.replace(/'/g, "")),
                  (faicon = skill.icono.replace(/'/g, "")),
                ]}
                fixedWidth
                size="lg"
              />
              <h3>{skill.titulo}</h3>
            </div>
          ))}
        </div>
        <Tabs colecciones={array} icons={["align-left", "table"]} />
      </div>
    </Layout>
  );
};

export default PerfilPage;

export const query = graphql`
  query PerfilQuery {
    inicio: allStrapiInicio {
      edges {
        node {
          imagen {
            localFile {
              childImageSharp {
                gatsbyImageData(
                  width: 200
                  placeholder: BLURRED
                  formats: [AUTO, WEBP, AVIF]
                )
              }
            }
          }
        }
      }
    }
    perfil: allStrapiPerfil {
      edges {
        node {
          intro {
            titulo
            descripcion
          }
          flaex {
            titulo
            descripcion
          }
          portafolio {
            titulo
          }
          habilidades {
            id
            titulo
            icono
            prefix
            descripcion
          }
          formacion {
            id
            titulo
            texto
            lista
          }
          experiencia {
            id
            titulo
            texto
            lista
          }
          meta {
            id
            name
            value
          }
        }
      }
    }
  }
`;
