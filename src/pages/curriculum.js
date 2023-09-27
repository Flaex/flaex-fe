import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Tabs from "../components/tabs";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Default from "../layouts/default";
import Seo from "../components/seo";
import { usePerfil } from "../hooks/use-perfil";
import "../assets/scss/pages/perfil.scss";

const CurriculumPage = ({ data }) => {
  const perfil = usePerfil();
  const formacion = perfil.formacion;
  const experiencia = perfil.experiencia;

  return (
    <Default>
      <div className="perfil">
        <section className="perfil__col">
          <h1 className="hidden">Fredy Polanía | Perfil Profesional</h1>
          <StaticImage
            src="https://res.cloudinary.com/flaex/image/upload/v1676046070/strapi-v4/flaex_fredy_polania_perfil_2_f3eb6cedca.webp"
            alt="Fredy polania | @flaex_ perfil"
          />
          <h2>Fredy Polanía | Perfil Profesional</h2>
          <ReactMarkdown
            children={perfil.intro}
            remarkPlugins={[remarkGfm]}
            skipHtml={false}
            linkTarget="_blank"
          />
          <Tabs
            item={formacion}
            icons={["align-left", "table"]}
            clase="perfil__tablas"
          />
        </section>
        <section className="perfil__col">
          <Tabs
            item={experiencia}
            icons={["align-left", "table"]}
            clase="perfil__tablas"
          />
        </section>
      </div>
    </Default>
  );
};

export default CurriculumPage;

export const Head = () => <Seo title="Perfil de Fredy Polania" />;
