import React, { useState } from "react";
import { Link, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout from "../layouts/default";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Slider from "react-slick";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "../layouts/default.scss";

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
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Layout>
      <div className="portafolio">
        <h1>Portafolio</h1>
        <div className="portafolio-logotipos">
          <div>
            <FontAwesomeIcon
              icon={[
                (faprefix = "fas"),
                (faicon = logotipos[0].node.categoria.icono.replace(/'/g, "")),
              ]}
              fixedWidth
              size="lg"
            />
            <h2>{logotipos[0].node.categoria.titulo}</h2>
          </div>
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
                    alt="Test text"
                  />
                </Link>
              </div>
            ))}
          </Slider>
        </div>
        <div className="portafolio-branding">
          <div>
            <FontAwesomeIcon
              icon={[
                (faprefix = "fas"),
                (faicon = branding[0].node.categoria.icono.replace(/'/g, "")),
              ]}
              fixedWidth
              size="lg"
            />
            <h2>{branding[0].node.categoria.titulo}</h2>
          </div>
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
                      alt="Test text"
                    />
                  </Link>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        <div>
          <div>
            <FontAwesomeIcon
              icon={[
                (faprefix = "fas"),
                (faicon = web[0].node.categoria.icono.replace(/'/g, "")),
              ]}
              fixedWidth
              size="lg"
            />
            <h2>{web[0].node.categoria.titulo}</h2>
          </div>
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
                      alt="Test text"
                    />
                  </Link>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        <div>
          <div>
            <FontAwesomeIcon
              icon={[
                (faprefix = "fas"),
                (faicon = letrasiconos[0].node.categoria.icono.replace(
                  /'/g,
                  ""
                )),
              ]}
              fixedWidth
              size="lg"
            />
            <h2>{letrasiconos[0].node.categoria.titulo}</h2>
          </div>
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
                      alt="Test text"
                    />
                  </Link>
                </div>
              </div>
            ))}
          </Slider>
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
            localFile {
              childImageSharp {
                gatsbyImageData
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
            localFile {
              childImageSharp {
                gatsbyImageData
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
            localFile {
              childImageSharp {
                gatsbyImageData
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
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
      }
    }
  }
`;
