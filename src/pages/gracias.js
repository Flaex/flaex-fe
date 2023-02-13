import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Page from "../layouts/page";
import Seo from "../components/seo";

const thankYouImage = 320;

const thankYouPage = () => (
  <Page title="Gracias por contactarme">
    <h1>¡Mensaje enviado!</h1>
    <p>Te responderé a la brevedad posible</p>
    <div className="notfound">
      <StaticImage
        className="notfound"
        width={thankYouImage}
        placeholder="blurred"
        src="https://res.cloudinary.com/flaex/image/upload/v1676256333/strapi-v4/ty_c7bf8fe6d3.webp"
        alt="@flaex_ con cara de sorpresa"
      />
    </div>
  </Page>
);

export default thankYouPage;

export const Head = () => <Seo />;
