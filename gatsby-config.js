/**
 * @type {import('gatsby').GatsbyConfig}
 */

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

const strapiConfig = require("./data/strapiConfig");

module.exports = {
  siteMetadata: {
    title: "Fredy Polanía",
    description:
      "Emprendedor, comunicador visual, desarrollador web. Guías, artículos y tutoriales de diseño gráfico y tecnologías web.",
    author: "Fredy Polania",
    image:
      "https://res.cloudinary.com/flaex/image/upload/v1639075622/strapi/flaex_open_graph_minuatura_db580ae3b0.jpg",
    author: "Fredy Polania",
    type: "website",
    siteUrl: "https://flaex.design",
    titleTemplate: " · @flaex_",
    twitterUsername: "@Flaex_",
  },
  plugins: [
    {
      resolve: "gatsby-plugin-sass",
      options: {
        additionalData: `@import "${__dirname}/src/assets/scss/global";`,
      },
    },
    "gatsby-plugin-google-gtag",
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/assets/images/favicon.png",
      },
    },
    "gatsby-transformer-remark",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/assets/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: `gatsby-source-strapi`,
      options: strapiConfig,
    },
  ],
};
