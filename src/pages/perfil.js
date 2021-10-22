import React, { useState } from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout from "../layouts/default";
import Tabs from "../components/tabs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Seo from "../components/seo";
import "./perfil.scss";

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
      <h1 className="hidden">Perfil</h1>
      <div className="perfil">
        <section className="perfil__col">
          <div className="intro">
            <GatsbyImage
              className="hero__imagen"
              image={getImage(data.inicio.edges[0].node.imagen.localFile)}
              alt="Test text"
            />
            <h2>{data.perfil.edges[0].node.intro.titulo}</h2>
            <ReactMarkdown
              children={data.perfil.edges[0].node.intro.descripcion}
              remarkPlugins={[remarkGfm]}
              skipHtml={true}
            />
          </div>
          <div>
            <h2>{data.perfil.edges[0].node.flaex.titulo}</h2>
            <ReactMarkdown
              children={data.perfil.edges[0].node.flaex.descripcion}
              remarkPlugins={[remarkGfm]}
              skipHtml={true}
            />
          </div>
          <div className="habilidades">
            <h2>Habilidades</h2>
            <div className="skills">
              {data.perfil.edges[0].node.habilidades.map((skill) => (
                <div className="skills__item" key={skill.id}>
                  <div className="skills__link">
                    <FontAwesomeIcon
                      icon={[
                        (faprefix = skill.prefix.replace(/'/g, "")),
                        (faicon = skill.icono.replace(/'/g, "")),
                      ]}
                      fixedWidth
                      size="2x"
                    />
                    <h3 className="skills__title">{skill.titulo}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="perfil__col">
          <Tabs
            colecciones={array}
            icons={["align-left", "table"]}
            clase="perfil__tablas"
          />
        </section>
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
                  width: 300
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
