import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Default from "../layouts/default";
import Seo from "../components/seo";

const intro = {
  titulo: "Hola, mi nombre es Fredy ", 
  alternativeText: "Fredy polania | @flaex_ perfil",
  descripcion: "Soy comunicador visual y desarrollador web 🎨👨‍💻📱",
};

const IndexPage = () => {
  return (
    <Default>
      <div className="inicio">
        <h1 className="hidden">Inicio</h1>
        <section className="inicio__col">
          <h2 className="hero__title">{intro.titulo}</h2>
          <div className="hero">
            <StaticImage
              src="https://res.cloudinary.com/flaex/image/upload/v1675544334/strapi-v4/flaex_fred_polania_perfil_3c3169cb26.webp"
              alt={intro.alternativeText}
            />
            <div className="hero__info">
              <p>{intro.descripcion} </p>
            </div>
          </div>
        </section>
      </div>
    </Default>
  );
};

export default IndexPage;

export const Head = () => <Seo />;
