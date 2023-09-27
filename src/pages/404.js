import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Default from "../layouts/default";
import Seo from "../components/seo";

const NotFoundImage = 320;

const NotFoundPage = () => (
  <Default>
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
      src="https://res.cloudinary.com/flaex/image/upload/v1676256333/strapi-v4/404_5446b441bd.webp"
      alt="@flaex_ con cara de sorpresa"
    />
  </Default>
);

export default NotFoundPage;

export const Head = () => <Seo title="404: No encontrado" />;
