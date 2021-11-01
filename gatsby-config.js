require("dotenv").config({
  path: `.env`,
});

module.exports = {
  siteMetadata: {
    title: "Diseñador gráfico y desarrollador web front-end",
    titleTemplate: "%s · @flaex_",
    description: "Perfil profesional, portafolio & blog | Freddy Polanía",
    author: "Freddy Polania",
    siteUrl: "https://flaex.netlify.com",
    image: "https://res.cloudinary.com/flaex/image/upload/v1635773743/brand/seo-img_dlqmb2.jpg",
    twitterUsername: "@Flaex_",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/about-us/`, `/projects/*`],
      },
    },
    {
      resolve: "gatsby-plugin-sass",
      otions: {
        useResolveUrlLoader: true,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "@flaex_",
        short_name: "flaex",
        start_url: "/",
        background_color: "#fff",
        theme_color: "#fff",
        display: "standalone",
        icon: "src/assets/images/favicon.png", // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaultQuality: 100,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/assets/images/",
      },
      __key: "images",
    },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: "http://localhost:1337",
        queryLimit: 1000, // Defaults to 100
        collectionTypes: [`articulos`, `caras`, `categorias`, `proyectos`],
        singleTypes: [`contacto`, `inicio`, `perfil`],
        loginData: {
          identifier: process.env.IDENTIFIER,
          password: process.env.PASSWORD,
        },
      },
    },
    /* {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "G-4W17JXKS6P", // Google Analytics / GA
        ],
        gtagConfig: {
          optimize_id: "GTM-5LFLQGT",
          anonymize_ip: true,
          cookie_expires: 0,
        },
        pluginConfig: {
          head: true,
        },
      },
    }, */
  ],
};
