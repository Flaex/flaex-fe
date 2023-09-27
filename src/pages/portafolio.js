import React, { useState } from "react";
import { graphql, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Default from "../layouts/default";
import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Seo from "../components/seo";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../assets/scss/pages/portafolio.scss";

const PortafolioPage = ({ data }) => {
  /* eslint-disable */
  let [faicon, faprefix] = useState(0);
  const logotipos = data.logotipos.nodes;
  const branding = data.branding.nodes;
  const web = data.web.nodes;
  const fonticons = data.fonticons.nodes;

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };

  return (
    <Default>
      <div className="portafolio">
        <h1 className="hidden">Portafolio</h1>

        <div className="portafolio-logotipos">
          <h2>
            <FontAwesomeIcon
              icon={[
                (faprefix = "fas"),
                (faicon = logotipos[0].categoria.icono.replace(/'/g, "")),
              ]}
              fixedWidth
              size="sm"
            />{" "}
            {logotipos[0].categoria.titulo}
          </h2>

          <Slider {...settings}>
            {logotipos.map((logotipo) => (
              <div className="test" key={logotipo.id}>
                <Link
                  to={`/portafolio/${logotipo.categoria.slug}/${logotipo.slug}`}
                  rel="noopener noreferrer"
                  aria-label={`Ir a ${logotipo.titulo}`}
                >
                  <GatsbyImage
                    image={getImage(logotipo.miniatura.localFile)}
                    alt={logotipo.miniatura.alternativeText}
                  />
                </Link>
              </div>
            ))}
          </Slider>
          <div className="portafolio__categoria-link">
            <Link
              to="/portafolio/logotipos/"
              aria-label="Ir al portafolio de logos"
            >
              ver todos&nbsp;➝
            </Link>
          </div>
        </div>

        <div className="portafolio-branding">
          <h2>
            <FontAwesomeIcon
              icon={[
                (faprefix = "fas"),
                (faicon = branding[0].categoria.icono.replace(/'/g, "")),
              ]}
              fixedWidth
              size="sm"
            />{" "}
            {branding[0].categoria.titulo}
          </h2>

          <Slider {...settings}>
            {branding.map((brand) => (
              <div className="test" key={brand.id}>
                <Link
                  to={`/portafolio/${brand.categoria.slug}/${brand.slug}`}
                  rel="noopener noreferrer"
                  aria-label={`Ir a ${brand.titulo}`}
                >
                  <GatsbyImage
                    image={getImage(brand.miniatura.localFile)}
                    alt={brand.miniatura.alternativeText}
                  />
                </Link>
              </div>
            ))}
          </Slider>
          <div className="portafolio__categoria-link">
            <Link
              to="/portafolio/branding/"
              aria-label="Ir al portafolio de branding"
            >
              ver todos&nbsp;➝
            </Link>
          </div>
        </div>

        <div className="portafolio-web">
          <h2>
            <FontAwesomeIcon
              icon={[
                (faprefix = "fas"),
                (faicon = web[0].categoria.icono.replace(/'/g, "")),
              ]}
              fixedWidth
              size="sm"
            />{" "}
            {web[0].categoria.titulo}
          </h2>

          <Slider {...settings}>
            {web.map((item) => (
              <div className="test" key={item.id}>
                <Link
                  to={`/portafolio/${item.categoria.slug}/${item.slug}`}
                  rel="noopener noreferrer"
                  aria-label={`Ir a ${item.titulo}`}
                >
                  <GatsbyImage
                    image={getImage(item.miniatura.localFile)}
                    alt={item.miniatura.alternativeText}
                  />
                </Link>
              </div>
            ))}
          </Slider>
          <div className="portafolio__categoria-link">
            <Link to="/portafolio/web/" aria-label="Ir al portafolio de web">
              ver todos&nbsp;➝
            </Link>
          </div>
        </div>

        <div className="portafolio-fonticon">
          <h2>
            <FontAwesomeIcon
              icon={[
                (faprefix = "fas"),
                (faicon = fonticons[0].categoria.icono.replace(/'/g, "")),
              ]}
              fixedWidth
              size="sm"
            />{" "}
            {fonticons[0].categoria.titulo}
          </h2>

          <Slider {...settings}>
            {fonticons.map((font) => (
              <div className="test" key={font.id}>
                <Link
                  to={`/portafolio/${font.categoria.slug}/${font.slug}`}
                  rel="noopener noreferrer"
                  aria-label={`Ir a ${font.titulo}`}
                >
                  <GatsbyImage
                    image={getImage(font.miniatura.localFile)}
                    alt={font.miniatura.alternativeText}
                  />
                </Link>
              </div>
            ))}
          </Slider>
          <div className="portafolio__categoria-link">
            <Link
              to="/portafolio/fonticons/"
              aria-label="Ir al portafolio de fonticons"
            >
              ver todos&nbsp;➝
            </Link>
          </div>
        </div>
      </div>
    </Default>
  );
};
export default PortafolioPage;

export const Head = () => (
  <Seo
    title="Portafolio de Freddy Polania"
    description="Diseño de logos, branding impreso y digital en papelería comercial, catálogos, manuales de identidad gráfica, tipografía e iconografía."
  />
);

export const query = graphql`
  query Portafolio {
    logotipos: allStrapiProyecto(
      limit: 4
      sort: { createdAt: DESC }
      filter: { categoria: { slug: { eq: "logotipos" } } }
    ) {
      nodes {
        id
        slug
        categoria {
          titulo
          slug
          icono
        }
        miniatura {
          alternativeText
          localFile {
            childImageSharp {
              gatsbyImageData(width: 300)
            }
          }
        }
      }
    }

    branding: allStrapiProyecto(
      limit: 4
      sort: { createdAt: DESC }
      filter: { categoria: { slug: { eq: "branding" } } }
    ) {
      nodes {
        id
        slug
        categoria {
          titulo
          slug
          icono
        }
        miniatura {
          alternativeText
          localFile {
            childImageSharp {
              gatsbyImageData(width: 300)
            }
          }
        }
      }
    }

    web: allStrapiProyecto(
      limit: 4
      sort: { createdAt: DESC }
      filter: { categoria: { slug: { eq: "web" } } }
    ) {
      nodes {
        id
        slug
        categoria {
          titulo
          slug
          icono
        }
        miniatura {
          alternativeText
          localFile {
            childImageSharp {
              gatsbyImageData(width: 300)
            }
          }
        }
      }
    }

    fonticons: allStrapiProyecto(
      limit: 4
      sort: { createdAt: DESC }
      filter: { categoria: { slug: { eq: "fonticons" } } }
    ) {
      nodes {
        id
        slug
        categoria {
          titulo
          slug
          icono
        }
        miniatura {
          alternativeText
          localFile {
            childImageSharp {
              gatsbyImageData(width: 300)
            }
          }
        }
      }
    }
  }
`;
