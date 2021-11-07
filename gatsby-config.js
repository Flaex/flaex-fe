require("dotenv").config({
  path: `.env`,
});

module.exports = {
  siteMetadata: {
    title: "Diseñador gráfico y desarrollador web front-end",
    titleTemplate: "%s · @flaex_",
    description: "Perfil profesional, portafolio y blog | Freddy Polanía",
    author: "Freddy Polania",
    siteUrl: "https://flaex.netlify.com",
    image:
      "https://res.cloudinary.com/flaex/image/upload/v1635773743/brand/seo-img_dlqmb2.jpg",
    twitterUsername: "@Flaex_",
  },
  plugins: [
    "gatsby-plugin-image",
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          layout: `fullWidth`,
          formats: [`auto`, `webp`, `avif`],
          placeholder: `dominantColor`,
          quality: 100,
          breakpoints: [416, 736, 1024, 1280, 1366],
          backgroundColor: `transparent`,
        },
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    `gatsby-plugin-preact`,
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [
          `/perfil/`,
          `/portafolio/`,
          `/portafolio/*`,
          `/blog/`,
          `/contacto/`,
        ],
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
        apiURL: process.env.API_URL,
        queryLimit: 1000, // Defaults to 100
        collectionTypes: [`articulos`, `caras`, `categorias`, `proyectos`],
        singleTypes: [`contacto`, `inicio`, `perfil`],
        loginData: {
          identifier: process.env.IDENTIFIER,
          password: process.env.PASSWORD,
        },
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "G-S47F7WM6C7", // Google Analytics / GA
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
    {
      resolve: "gatsby-plugin-webpack-bundle-analyser-v2",
      options: {
        devMode: true,
      },
    },
    {
      resolve: 'gatsby-plugin-preconnect',
      options: {
        domains: ['https://res.cloudinary.com/flaex'],
      },
    },
  ],
};
