import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Page from "../layouts/page";
import Seo from "../components/seo";

const NotFoundImage = 320;

const NotFoundPage = () => (
  <Page>
    <h1>
      Página inexistente
      <span aria-label="emoji" role="img">
        😔
      </span>
    </h1>
    <p>Intentaste visitar una página que no existe.</p>
    <p>
      ¡Usa el menú para volver al sitio!
      <span aria-label="emoji" role="img">
        😃
      </span>
    </p>
    <StaticImage
      className="notfound"
      width={NotFoundImage}
      placeholder="blurred"
      src="../assets/images/404.webp"
      alt="@flaex_ con cara de sorpresa"
    />
  </Page>
);

export default NotFoundPage;

export const Head = () => <Seo title="404: No encontrado" />;
