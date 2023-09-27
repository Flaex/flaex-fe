import * as React from "react";
import { graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Default from "../layouts/default";
import Seo from "../components/seo";
import "../assets/scss/pages/perfil.scss";

const profile = `Me dedico al diseño gráfico y desarrollo web front-end enfocado en los usuarios.
  
  Diseño logos, branding, aplicaciones web, tipografía e íconos. Desde 2019, he estado trabajando con tecnologías relacionadas con JAMStack como React, Vue, Gatsby, Gridsome, Nuxt y Astro.
  
  Director en [Novanet Studio](https://novanet.studio/) 🎨👨‍💻📱. Dirijo proyectos de creación de logos, branding impreso y digital, catálogos, manuales de identidad gráfica, aplicaciones web y campañas en redes sociales. Organizo y dirijo proyectos para sitios estáticos y dinámicos, implementación de layouts web en CMS y desarrollo de aplicaciones PWA.`;

const flaex = `
  Es mi identidad gráfica; el diseño está inspirado en el trabajo manual con materiales tradicionales y está complementado con series de “caras” hechas a partir de tipografía y figuras geométricas.

  En el logotipo están las iniciales de mi nombre ubicadas de tal forma que semejan los ojos y la boca de una cara… 😅. La intención es mostrar un logotipo que me represente y diferente al enfoque tradicional. 
  
  El branding está complementado con series diseñadas con caracteres tipográficos y figuras geométricas combinadas para crear “expresiones”.
  
  `;

const PerfilPage = ({ data }) => {
  const caras = data.allStrapiCara.nodes;

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
    return array[0].media.url;
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
      <video key=${array[0].id} autoplay muted playsinline>
        <source src=${array[0].media.url} type="video/mp4" />   
        Your browser does not support the video tag.                        
      </video>
    `;
  };

  return (
    <Default>
      <div className="perfil">
        <section>
          <h1 className="hidden">Perfil</h1>
          <StaticImage
            src="https://res.cloudinary.com/flaex/image/upload/v1675544334/strapi-v4/flaex_fred_polania_perfil_3c3169cb26.webp"
            alt="Fredy polania | @flaex_ perfil"
          />
          <h2>Fredy Polanía</h2>
          <ReactMarkdown
            children={profile}
            remarkPlugins={[remarkGfm]}
            skipHtml={false}
            linkTarget="_blank"
          />
          <div className="perfil__images-wrapper">
            <StaticImage
              src="https://res.cloudinary.com/flaex/image/upload/v1677420394/strapi-v4/flaex_brand_expresiones_79e15fed71.webp"
              alt="Diseño con expresiones de @flaex_"
            />
            <StaticImage
              src="https://res.cloudinary.com/flaex/image/upload/v1677420394/strapi-v4/flaex_brand_expresiones_2_f3aaa9135c.webp"
              alt="Diseño con expresiones de @flaex_"
            />
          </div>

          <h2>¿Qué es @flaex_?</h2>
          <ReactMarkdown
            children={flaex}
            remarkPlugins={[remarkGfm]}
            skipHtml={false}
            linkTarget="_blank"
          />
          <div className="caras">
            <div className="caras__media">
              <video className="caras__video" autoPlay muted playsInline>
                <source src={caras[3].media.url} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="caras__info">
              <button
                className="caras__boton"
                type="button"
                onClick={() => randomizer(caras)}
              >
                ¡Cambiar expresión!{" "}
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
        </section>
      </div>
    </Default>
  );
};

export default PerfilPage;

export const Head = () => <Seo title="Perfil de Fredy Polania" />;

export const query = graphql`
  query Perfil {
    allStrapiCara {
      nodes {
        id
        nombre
        media {
          url
        }
      }
    }
  }
`;
