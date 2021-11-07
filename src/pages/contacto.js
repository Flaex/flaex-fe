import React from "react";
import { graphql } from "gatsby";
import Layout from "../layouts/default";
import Map from "../components/map";
import Seo from "../components/seo";
import "./contacto.scss";

const ContactoPage = ({ data }) => {
  return (
    <Layout>
      <Seo title="Información de contacto de Freddy Polania | @Flaex_" />
      <h1 className="hidden">Contacto</h1>
      <div className="contacto">
        <div className="mapa">
          <h2>{data.contacto.edges[0].node.ubicacion.titulo}</h2>
          <p>{data.contacto.edges[0].node.ubicacion.descripcion}</p>
          <Map
            lat={data.contacto.edges[0].node.latitud}
            lng={data.contacto.edges[0].node.longitud}
            clase="contacto__mapa"
            zoom={12}
          />
        </div>

        <div className="formulario">
          <h2>{data.contacto.edges[0].node.formulario.titulo}</h2>
          <p>{data.contacto.edges[0].node.formulario.descripcion}</p>

          <form
            className="contacto__form"
            method="post"
            netlify-honeypot="bot-field"
            data-netlify="true"
            name="contact"
            action="/gracias/"
          >
            <label>
              <input type="hidden" name="bot-field" />
              <input type="hidden" name="form-name" value="contact" />{" "}
            </label>

            <div>
              <input type="text" name="name" placeholder="Nombre y Apellido" />
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
            <input type="submit" value="Enviar mensaje ➤" />
            <input type="hidden" name="form-name" value="inicio" />
          </form>
          <p className="contacto__mensaje">
            {data.contacto.edges[0].node.redes.descripcion}
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default ContactoPage;

export const query = graphql`
  query ContactoQuery {
    contacto: allStrapiContacto {
      edges {
        node {
          ubicacion {
            titulo
            descripcion
          }
          latitud
          longitud
          formulario {
            titulo
            descripcion
          }
          redes {
            titulo
            descripcion
          }
        }
      }
    }
  }
`;
