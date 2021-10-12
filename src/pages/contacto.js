import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../layouts/default";
import Map from "../components/map";

const ContactoPage = ({ data }) => {
  return (
    <Layout>
      <div className="contacto">
        <h1>Contacto</h1>
        <h2>{data.contacto.edges[0].node.ubicacion.titulo}</h2>

        <h2>{data.contacto.edges[0].node.formulario.titulo}</h2>
        <p>{data.contacto.edges[0].node.formulario.descripcion}</p>
        <Map
          lat={data.contacto.edges[0].node.latitud}
          lng={data.contacto.edges[0].node.longitud}
        />

        <form
          method="post"
          netlify-honeypot="bot-field"
          data-netlify="true"
          name="contact"
        >
          <h3 className="formulario__titulo">Formulario de contacto</h3>

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
          <input type="submit" value="Enviar" />
          <input type="hidden" name="form-name" value="inicio" />
        </form>
        <h2>{data.contacto.edges[0].node.redes.titulo}</h2>
        <p>{data.contacto.edges[0].node.redes.descripcion}</p>
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
