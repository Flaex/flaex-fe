import * as React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout from "../layouts/default";
import Video from "../components/video";
import Seo from "../components/seo";

// markup
const IndexPage = ({ data }) => {
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

  // Change video file element to a new one
  const randomizer = (array) => {
    positonZero(array);
    const videoContainer = document.querySelector(".video-container");
    videoContainer.innerHTML = `<div key=${array[0].node.media.id}>             
      <video autoPlay>
        <source src=${array[0].node.media.url} type="video/mp4" />                           
      </video>
    </div>`;
  };
  // Variable for dynamic image
  /* const videoLink = shuffle(data.caras.edges); */
  const avatar = getImage(data.inicio.edges[0].node.imagen.localFile);

  // Randomize function

  return (
    <Layout>
      <Seo description={data.inicio.edges[0].node.meta[0].value} />
      <div className="inicio">
        <h1 className="about-me">Inicio</h1>
        <h2>{data.inicio.edges[0].node.intro.titulo}</h2>
        <p>{data.inicio.edges[0].node.intro.descripcion}</p>
        <h2>{data.inicio.edges[0].node.flaex.titulo}</h2>
        <p>{data.inicio.edges[0].node.flaex.descripcion}</p>
        <h2>{data.inicio.edges[0].node.objetivo.titulo}</h2>
        <p>{data.inicio.edges[0].node.objetivo.descripcion}</p>
        <GatsbyImage image={avatar} alt="Test text" />
        <button
          className="shuffle-btn"
          type="button"
          onLoad={(event) => randomizer(data.caras.edges)}
          onClick={(event) => randomizer(data.caras.edges)}
        >
          ¡cambiar!{" "}
          <span aria-label="emoji" role="img">
            &#10227;
          </span>
        </button>
        <div className="video-container">
          <video autoPlay>
            <source src={data.caras.edges[9].node.media.url} type="video/mp4" />
          </video>
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
  }
`;
