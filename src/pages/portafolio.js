import React, { useState } from "react";
import { Link, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout from "../layouts/default";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Slider from "react-slick";
import Seo from "../components/seo";
import "./portafolio.scss";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PortafolioPage = ({ data }) => {
  /* eslint-disable */
  let [faicon, faprefix] = useState(0);
  const logotipos = data.logotipos.edges;
  const branding = data.branding.edges;
  const web = data.web.edges;
  const letrasiconos = data.letrasiconos.edges;

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };

  return (
    <Layout>
      <Seo title="Portafolio de Freddy Polania | @Flaex_" description="Proyectos de logotipos, branding, diseño, desarrollo web, letras e iconos" />
      <h1 className="hidden">Portafolio</h1>
      <div className="portafolio">        
        <div className="portafolio-logotipos">
          <h2>
            <FontAwesomeIcon
              icon={[
                (faprefix = "fas"),
                (faicon = logotipos[0].node.categoria.icono.replace(/'/g, "")),
              ]}
              fixedWidth
              size="sm"
            />
            {logotipos[0].node.categoria.titulo}
          </h2>

          <Slider {...settings}>
            {logotipos.map((logotipo) => (
              <div className="test" key={logotipo.node.id}>
                <Link
                  to={`/portafolio/${logotipo.node.categoria.slug}/${logotipo.node.slug}`}
                  rel="noopener noreferrer"
                  aria-label={`Ir a ${logotipo.node.titulo}`}
                >
                  <GatsbyImage
                    image={getImage(logotipo.node.miniatura.localFile)}
                    alt={logotipo.node.miniatura.alternativeText}
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
                (faicon = branding[0].node.categoria.icono.replace(/'/g, "")),
              ]}
              fixedWidth
              size="sm"
            />
            {branding[0].node.categoria.titulo}
          </h2>
          <Slider {...settings}>
            {branding.map((brand) => (
              <div key={brand.node.id}>
                <div className="test" key={brand.node.id}>
                  <Link
                    to={`/portafolio/${brand.node.categoria.slug}/${brand.node.slug}`}
                    rel="noopener noreferrer"
                    aria-label={`Ir a ${brand.node.titulo}`}
                    key={brand.node.id}
                  >
                    <GatsbyImage
                      image={getImage(brand.node.miniatura.localFile)}
                      alt={brand.node.miniatura.alternativeText}
                    />
                  </Link>
                </div>
              </div>
            ))}
          </Slider>
          <div className="portafolio__categoria-link">
            <Link
              to="/portafolio/branding/"
              aria-label="Ir al portafolio de logos"
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
                (faicon = web[0].node.categoria.icono.replace(/'/g, "")),
              ]}
              fixedWidth
              size="sm"
            />
            {web[0].node.categoria.titulo}
          </h2>
          <Slider {...settings}>
            {web.map((item) => (
              <div key={item.node.id}>
                <div className="test" key={item.node.id}>
                  <Link
                    to={`/portafolio/${item.node.categoria.slug}/${item.node.slug}`}
                    rel="noopener noreferrer"
                    aria-label={`Ir a ${item.node.titulo}`}
                    key={item.node.id}
                  >
                    <GatsbyImage
                      image={getImage(item.node.miniatura.localFile)}
                      alt={item.node.miniatura.alternativeText}
                    />
                  </Link>
                </div>
              </div>
            ))}
          </Slider>
          <div className="portafolio__categoria-link">
            <Link to="/portafolio/web/" aria-label="Ir al portafolio de logos">
              ver todos&nbsp;➝
            </Link>
          </div>
        </div>
        <div className="portafolio-letras">
          <h2>
            <FontAwesomeIcon
              icon={[
                (faprefix = "fas"),
                (faicon = letrasiconos[0].node.categoria.icono.replace(
                  /'/g,
                  ""
                )),
              ]}
              fixedWidth
              size="sm"
            />
            {letrasiconos[0].node.categoria.titulo}
          </h2>
          <Slider {...settings}>
            {letrasiconos.map((item) => (
              <div key={item.node.id}>
                <div className="test" key={item.node.id}>
                  <Link
                    to={`/portafolio/${item.node.categoria.slug}/${item.node.slug}`}
                    rel="noopener noreferrer"
                    aria-label={`Ir a ${item.node.titulo}`}
                    key={item.node.id}
                  >
                    <GatsbyImage
                      image={getImage(item.node.miniatura.localFile)}
                      alt={item.node.miniatura.alternativeText}
                    />
                  </Link>
                </div>
              </div>
            ))}
          </Slider>
          <div className="portafolio__categoria-link">
            <Link
              to="/portafolio/letras-iconos/"
              aria-label="Ir al portafolio de logos"
            >
              ver todos&nbsp;➝
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PortafolioPage;

export const query = graphql`
  query PortafolioQuery {
    logotipos: allStrapiProyectos(
      limit: 4
      filter: { categoria: { slug: { eq: "logotipos" } } }
    ) {
      edges {
        node {
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
    branding: allStrapiProyectos(
      limit: 4
      filter: { categoria: { slug: { eq: "branding" } } }
    ) {
      edges {
        node {
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
    web: allStrapiProyectos(
      limit: 4
      filter: { categoria: { slug: { eq: "web" } } }
    ) {
      edges {
        node {
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
    letrasiconos: allStrapiProyectos(
      limit: 4
      filter: { categoria: { slug: { eq: "letras-iconos" } } }
    ) {
      edges {
        node {
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
  }
`;
