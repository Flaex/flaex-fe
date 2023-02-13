import React, { useState } from "react";
import { graphql, Link } from "gatsby";
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image";
import Page from "../layouts/page";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Seo from "../components/seo";
import { useHabilidades } from "../hooks/use-habilidades";
import "../assets/scss/pages/index.scss";

const intro = {
  titulo: "¡Hola, mi nombre es Fredy!",
  alternativeText: "Fredy polania | @flaex_ perfil",
  descripcion: "Soy diseñador gráfico y desarrollador web",
  emojis: "🎨👨‍💻📱",
};

const blog = {
  titulo: "Blog de diseño y desarrollo web",
  descripcion: "Artículos de diseño gráfico, desarrollo y tecnologías web.",
};

const IndexPage = ({ data }) => {
  /* eslint-disable */
  let [faicon, faprefix] = useState(0);
  const habilidades = useHabilidades();
  const articulos = data.articulos.nodes;
  const guias = data.guias.nodes;

  return (
    <Page>
      <div className="inicio">
        <h1 className="hidden">Inicio</h1>
        <section className="inicio__col">
          <div className="hero">
            <StaticImage
              src="https://res.cloudinary.com/flaex/image/upload/v1676046070/strapi-v4/flaex_fredy_polania_perfil_2_f3eb6cedca.webp"
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
        </section>

        <section className="inicio__col">
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
        </section>
      </div>
    </Page>
  );
};

export default IndexPage;

export const Head = () => <Seo />;

export const query = graphql`
  query Index {
    articulos: allStrapiArticulo(
      limit: 4
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
              gatsbyImageData(width: 375)
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
