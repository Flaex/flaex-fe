import React, { useState } from "react";
import { Link, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout from "../layouts/default";
import Seo from "../components/seo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const IndexPage = ({ data }) => {
  /* eslint-disable */
  let [faicon, faprefix] = useState(0);

  // Randomize function
  const shuffle = (array) => {
    let currentIndex = array.length,
      temporaryValue,
      randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array[0].node.media.url;
  };

  let positonZero = (array) => {
    shuffle(array);
    let newArray = array[0];
    return newArray;
  };

  const randomizer = (array) => {
    positonZero(array);
    const videoContainer = document.querySelector(".video-container");
    videoContainer.innerHTML = `<div key=${array[0].node.media.id}>             
      <video autoPlay>
        <source src=${array[0].node.media.url} type="video/mp4" />                           
      </video>
    </div>`;
  };

  return (
    <Layout>
      <Seo description={data.inicio.edges[0].node.meta[0].value} />
      <div className="inicio">
        <h1 className="about-me">Inicio</h1>
        <GatsbyImage
          image={getImage(data.inicio.edges[0].node.imagen.localFile)}
          alt="Test text"
        />
        <h2>{data.inicio.edges[0].node.intro.titulo}</h2>
        <p>{data.inicio.edges[0].node.intro.descripcion}</p>
        <button
          className="shuffle-btn"
          type="button"
          onClick={() => randomizer(data.caras.edges)}
        >
          ¡cambiar!{" "}
          <span aria-label="emoji" role="img">
            &#10227;
          </span>
        </button>
        <div className="video-container">
          <video autoPlay>
            {/* <source src={data.caras.edges[3].node.media.url} type="video/mp4" /> */}
          </video>
        </div>
        <h2>{data.inicio.edges[0].node.flaex.titulo}</h2>
        <p>{data.inicio.edges[0].node.flaex.descripcion}</p>
        <h2>{data.inicio.edges[0].node.objetivo.titulo}</h2>
        <p>{data.inicio.edges[0].node.objetivo.descripcion}</p>
        <ul>
          {data.articulos.edges.map((articulo) => (
            <li key={articulo.node.id}>
              <Link
                to={`/blog/${articulo.node.slug}`}
                rel="noopener noreferrer"
                aria-label={`Ir a ${articulo.node.titulo}`}
              >
                <GatsbyImage
                  image={getImage(articulo.node.imagen.localFile)}
                  alt="Test text"
                />
                <h3>{articulo.node.titulo}</h3>
              </Link>
            </li>
          ))}
        </ul>
        <div className="portafolio">
          <h2>{data.perfil.edges[0].node.portafolio.titulo}</h2>
          {data.perfil.edges[0].node.habilidades.map((skill) => (
            <div key={skill.id}>
              <Link
                to={skill.descripcion}
                rel="noopener noreferrer"
                aria-label={`Ir a ${skill.titulo}`}
              >
                <FontAwesomeIcon
                  icon={[
                    (faprefix = skill.prefix.replace(/'/g, "")),
                    (faicon = skill.icono.replace(/'/g, "")),
                  ]}
                  fixedWidth
                  size="lg"
                />
                <h3>{skill.titulo}</h3>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;

export const query = graphql`
  query InicioQuery {
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
          intro {
            titulo
            descripcion
          }
          flaex {
            titulo
            descripcion
          }
          objetivo {
            titulo
            descripcion
          }
          meta {
            id
            name
            value
          }
        }
      }
    }
    caras: allStrapiCaras {
      edges {
        node {
          media {
            id
            url
            localFile {
              id
              publicURL
            }
          }
        }
      }
    }
    articulos: allStrapiArticulos(
      limit: 2
      sort: { fields: [createdAt], order: DESC }
    ) {
      edges {
        node {
          id
          titulo
          descripcion
          slug
          imagen {
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
      }
    }
    perfil: allStrapiPerfil {
      edges {
        node {
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
        }
      }
    }
  }
`;
