import React, { useState } from "react";
import { graphql, Link } from "gatsby";
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image";
import Page from "../layouts/page";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Seo from "../components/seo";
import "../assets/scss/pages/index.scss";

const intro = {
  titulo: "¡Hola, mi nombre es Fredy!",
  alternativeText: "Fredy polania | @flaex_ perfil",
  descripcion: "Soy diseñador gráfico y desarrollador web",
  emojis: "🎨👨‍💻📱",
};

const habilidades = [
  {
    id: "0",
    titulo: "Logotipos",
    icono: "pencil-ruler",
    prefix: "fas",
    descripcion: "/portafolio/logotipos/",
  },
  {
    id: "1",
    titulo: "Branding",
    icono: "palette",
    prefix: "fas",
    descripcion: "/portafolio/branding/",
  },
  {
    id: "2",
    titulo: "Web",
    icono: "file-code",
    prefix: "fas",
    descripcion: "/portafolio/web/",
  },
  {
    id: "3",
    titulo: "Letras e iconos",
    icono: "icons",
    prefix: "fas",
    descripcion: "/portafolio/letras-iconos/",
  },
];

const blog = {
  titulo: "Blog de diseño y desarrollo web",
  descripcion: "Artículos de diseño gráfico, desarrollo y tecnologías web.",
};

const IndexPage = ({ data }) => {
  /* eslint-disable */
  let [faicon, faprefix] = useState(0);

  const articulos = data.articulos.nodes;

  return (
    <Page>
      <div className="inicio">
        <h1 className="hidden">Inicio</h1>
        <section className="inicio__col">
          <div className="hero">
            <StaticImage
              src="https://res.cloudinary.com/flaex/image/upload/v1675544334/strapi-v4/flaex_fred_polania_perfil_3c3169cb26.webp"
              alt={intro.alternativeText}
              className="hero__image"
            />
            <div className="hero__info">
              <p className="hero__description">{intro.titulo}</p>
              <p className="hero__description">{intro.descripcion}</p>
              <p className="hero__description">{intro.emojis}</p>
            </div>
          </div>

          <div className="skills">
            <h2 className="skills__title"> 👇 ¿Qué es lo que hago? 👇</h2>
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
                    {console.log(articulo.imagen.url)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </Page>
  );
};

export default IndexPage;

export const Head = () => <Seo />;

export const query = graphql`
  query Index {
    articulos: allStrapiArticulo(limit: 4, sort: { createdAt: DESC }) {
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
              gatsbyImageData(width: 375)
            }
          }
        }
      }
    }
  }
`;
