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
      "https://res.cloudinary.com/flaex/image/upload/v1677437625/strapi-v4/flaex_web_incio_039d1d75c0.webp",
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
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "G-ZQP8T9WP7N", // Google Analytics / GA
        ],
        /* gtagConfig: {
          optimize_id: "GTM-5LFLQGT",
          anonymize_ip: true,
          cookie_expires: 0,
        }, */
        pluginConfig: {
          head: true,
        },
      },
    },
    "gatsby-plugin-image",
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        output: "/./",
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/assets/images/favicon.png",
      },
    },
    "gatsby-transformer-remark",
    "gatsby-plugin-sharp",
    "gatsby-plugin-netlify",
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
