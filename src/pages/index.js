import React, { useState } from "react";
import { graphql, Link } from "gatsby";
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image";
import Default from "../layouts/default";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Seo from "../components/seo";
import { useHabilidades } from "../hooks/use-habilidades";
import "../assets/scss/pages/index.scss";
import { TwitchEmbed } from "react-twitch-embed";
import { useTwitch } from "../hooks/use-twitch";

const intro = {
  titulo: "¡Hola, mi nombre es Fredy!",
  alternativeText: "Fredy Polania | @flaex_ perfil",
  descripcion:
    "Este es mi blog de diseño gráfico, desarrollo web y videojuegos.",
  emojis: "🎨👨‍💻🎮",
};

const blog = {
  titulo: "Artículos",
  descripcion:
    "Temas relacionados con comunicación visual, programación web y videojuegos.",
};

const formulario = {
  titulo: "👉 ¡Envíame un mensaje! ✉️",
  descripcion: `¿Tienes algún comentario, sugerencia o pregunta?`,
  redes: "Sígueme mis redes sociales ▼ para ver más contenido.",
};

const vods = {
  titulo: "Videojuegos 🎮",
};

const IndexPage = ({ data }) => {
  /* eslint-disable */
  let [faicon, faprefix] = useState(0);
  const habilidades = useHabilidades();
  const articulos = data.articulos.nodes;
  const guias = data.guias.nodes;
  const embed = useTwitch();
  const handleReady = useTwitch();

  return (
    <Default>
      <div className="inicio">
        <h1 className="hidden">Inicio</h1>
        <section>
          <div className="hero">
            <Link to="/perfil" aria-label="Ir a mi perfil">
              <StaticImage
                src="https://res.cloudinary.com/flaex/image/upload/v1676046070/strapi-v4/flaex_fredy_polania_perfil_2_f3eb6cedca.webp"
                alt="Fredy polania | @flaex_ perfil"
              />
            </Link>
            <div className="hero__info">
              <p className="hero__description">
                {intro.titulo} <br />
                {intro.descripcion} <br />
                {intro.emojis}
              </p>
            </div>
          </div>

          <div className="skills">
            <h2> ¿Qué es lo que hago?✨</h2>
            <div className="skills__list">
              {habilidades.map((skill) => (
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
                    <h3 className="skills__item-title">{skill.titulo}</h3>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          <div className="minifeed">
            <h2> Guías y tutoriales👇</h2>
            <ul className="feed__guias">
              {guias.map((guia) => (
                <li className="feed__guia" key={guia.id}>
                  <Link
                    to={`/blog/${guia.slug}`}
                    rel="noopener noreferrer"
                    aria-label={`Ir a ${guia.titulo}`}
                  >
                    <h3 className="feed__title feed__guias-title">
                      {guia.titulo}
                    </h3>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="feed">
            <h2>{blog.titulo}</h2>
            <p>{blog.descripcion}</p>
            <ul className="feed__articulos">
              {articulos.map((articulo) => (
                <li className="feed__item" key={articulo.id}>
                  <Link
                    className="feed__link"
                    to={`/blog/${articulo.slug}`}
                    rel="noopener noreferrer"
                    aria-label={`Ir a ${articulo.titulo}`}
                  >
                    <GatsbyImage
                      className="feed__imagen"
                      image={getImage(articulo.imagen.localFile)}
                      alt={articulo.imagen.alternativeText}
                    />
                    <h3 className="feed__title">{articulo.titulo}</h3>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="twitch">
            <h2>{vods.titulo}</h2>
            <TwitchEmbed
              collection="8c8h9oVdfxfMLg"
              withChat={false}
              allowFullScreen
              onVideoReady={handleReady}
              width="100%"
              height="100%"                   
            ></TwitchEmbed>
          </div>

          <div className="formulario">
            <h2>{formulario.titulo}</h2>
            <p>{formulario.descripcion}</p>
            <form
              className="formulario__form"
              method="POST"
              data-netlify="true"
              name="contact"
              action="/gracias/"
            >
              <label>
                <input type="hidden" name="bot-field" />
                <input type="hidden" name="form-name" value="contact" />
              </label>
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Nombre y Apellido"
                />
              </div>
              <div>
                <input type="email" name="email" placeholder="Email" />
              </div>
              <div>
                <input type="number" name="phone" placeholder="Teléfono" />
              </div>
              <div>
                <textarea name="message" placeholder="Mensaje" />
              </div>
              <input type="submit" value="Enviar ➤" />
            </form>

            <p className="inicio__mensaje">{formulario.redes}</p>
          </div>
        </section>
      </div>
    </Default>
  );
};

export default IndexPage;

export const Head = () => <Seo />;

export const query = graphql`
  query Index {
    articulos: allStrapiArticulo(
      limit: 6
      sort: { createdAt: DESC }
      filter: { guia: { eq: false } }
    ) {
      nodes {
        id
        titulo
        fecha
        descripcion {
          data {
            descripcion
          }
        }
        slug
        imagen {
          alternativeText
          localFile {
            childImageSharp {
              gatsbyImageData(width: 455)
            }
          }
        }
      }
    }

    guias: allStrapiArticulo(
      sort: { createdAt: DESC }
      filter: { guia: { eq: true } }
    ) {
      nodes {
        id
        titulo
        slug
      }
    }
  }
`;