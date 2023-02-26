import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Page from "../layouts/page";
import Seo from "../components/seo";
import "../assets/scss/pages/contacto.scss";

const formulario = {
  titulo: "👉 ¡Envíame un mensaje! ✉️",
  descripcion: `¡Trabajemos en tu próximo proyecto! ¿Tienes algún comentario, sugerencia o pregunta?`,
  redes:
    "En mis redes sociales podrás ver el contenido que comparto de diseño gráfico y desarrollo web; en el pie de página están los enlaces para que los visites.",
};

const ContactoPage = () => {
  return (
    <Page>
      <Seo title="Información de contacto de Freddy Polania | @Flaex_" />
      <h1 className="hidden">Contacto</h1>
      <StaticImage
        src="https://res.cloudinary.com/flaex/image/upload/v1677436355/strapi-v4/flaex_contactame_8e534549b5.webp"
        alt="Expresión @flaex_"
        className="contacto__imagen"
      />
      <p>{formulario.descripcion}</p>
      <div className="contacto">
        <div className="formulario">
          <h2>{formulario.titulo}</h2>

          <form
            className="contacto__form"
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
            <input type="submit" value="Enviar ➤" />
          </form>

          <p className="contacto__mensaje">{formulario.redes}</p>
        </div>
      </div>
    </Page>
  );
};

export default ContactoPage;

export const Head = () => (
  <Seo title="Información de contacto de Freddy Polania | @Flaex_" />
);
