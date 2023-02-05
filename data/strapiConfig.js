const strapiConfig = {
  apiURL: process.env.STRAPI_API_URL,
  accessToken: process.env.STRAPI_TOKEN,
  collectionTypes: [
    {
      singularName: "articulo",
      queryParams: {
        populate: {
          titulo: "*",
          fecha: "*",
          descripcion: "*",
          slug: "*",
          imagen: {
            populate: {
              alternativeText: "*",
              localfile: "*",
            },
          },
        },
      },
    },
  ],
};

module.exports = strapiConfig;
