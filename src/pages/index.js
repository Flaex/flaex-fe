import React, { useState } from "react";
import { Link, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout from "../layouts/default";
import Seo from "../components/seo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import "./index.scss";

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
    const videoContainer = document.querySelector(".caras__media");
    videoContainer.innerHTML = `         
      <video key=${array[0].node.media.id} autoplay muted playsinline>
        <source src=${array[0].node.media.url} type="video/mp4" />   
        Your browser does not support the video tag.                        
      </video>
    `;
  };

  return (
    <Layout>
      <Seo description={data.inicio.edges[0].node.meta[0].value} />
      <div className="inicio">
        <h1 className="hidden">Inicio</h1>
        <section className="inicio__col">
          <div className="hero">
            <GatsbyImage
              className="hero__imagen"
              image={getImage(data.inicio.edges[0].node.imagen.localFile)}
              alt={data.inicio.edges[0].node.imagen.alternativeText}
            />
            <div className="hero__info">
              <h2 className="hero__title">
                {data.inicio.edges[0].node.intro.titulo}
              </h2>
              <ReactMarkdown           
                children={data.inicio.edges[0].node.intro.descripcion}
                remarkPlugins={[remarkGfm]}
                skipHtml={false}
                linkTarget="_blank"
              />
            </div>
          </div>
          <div className="caras">
            <div className="caras__media">
              <video className="caras__video" autoPlay muted playsInline>
                <source
                  src={data.caras.edges[3].node.media.url}
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="caras__info">
              <h2>{data.inicio.edges[0].node.flaex.titulo}</h2>
              <p>{data.inicio.edges[0].node.flaex.descripcion}</p>
              <button
                className="caras__boton"
                type="button"
                onClick={() => randomizer(data.caras.edges)}
              >
                ¡cambiar!{" "}
                <span
                  className="caras__boton--icono"
                  aria-label="emoji"
                  role="img"
                >
                  &#10227;
                </span>
              </button>
            </div>
          </div>
          <div className="habilidades">
            <h2>{data.perfil.edges[0].node.portafolio.titulo}</h2>
            <div className="skills">
              {data.perfil.edges[0].node.habilidades.map((skill) => (
                <div className="skills__item" key={skill.id}>
                  <Link
                    className="skills__link"
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
                      size="2x"
                    />
                    <h3 className="skills__title">{skill.titulo}</h3>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="inicio__col">
          <div className="feed">
            <h2>{data.inicio.edges[0].node.objetivo.titulo}</h2>
            <p>{data.inicio.edges[0].node.objetivo.descripcion}</p>
            <ul className="feed__articulos">
              {data.articulos.edges.map((articulo) => (
                <li className="feed__item" key={articulo.node.id}>
                  <Link
                    className="feed__link"
                    to={`/blog/${articulo.node.slug}`}
                    rel="noopener noreferrer"
                    aria-label={`Ir a ${articulo.node.titulo}`}
                  >
                    <GatsbyImage
                      className="feed__imagen"
                      image={getImage(articulo.node.imagen.localFile)}
                      alt={articulo.node.imagen.alternativeText}
                    />
                    <h3 className="feed__title">{articulo.node.titulo}</h3>
                    {console.log(articulo.node.imagen.url)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
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
            alternativeText
            localFile {
              childImageSharp {
                gatsbyImageData(width: 275)
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
            url
            alternativeText
            localFile {
              childImageSharp {
                gatsbyImageData(width: 495)
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
