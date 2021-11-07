import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../layouts/default";
import Seo from "../components/seo";

const thankYouImage = 320;

const thankYouPage = () => (
  <Layout title="Gracias por contactarme">
    <Seo />
    <h1>¡Mensaje enviado!</h1>
    <p>Te responderé a la brevedad posible</p>
    <div className="notfound">
      <StaticImage
        className="notfound"
        width={thankYouImage}
        placeholder="dominantColor"
        src="../assets/images/ty.webp"
        alt="@flaex_ con cara de sorpresa"
      />
    </div>
  </Layout>
);

export default thankYouPage;
