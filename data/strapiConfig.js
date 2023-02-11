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

    {
      singularName: "cara",
      queryParams: {
        populate: {
          media: {
            populate: {
              url: "*",
            },
          },
        },
      },
    },

    {
      singularName: "proyecto",
      queryParams: {
        populate: {
          titulo: "*",
          fecha: "*",
          descripcion: "*",
          ciudad: "*",
          ano: "*",
          slug: "*",
          categoria: "*",
          miniatura: {
            populate: {
              alternativeText: "*",
              localfile: "*",
            },
          },
          imagenes: {
            populate: {
              alternativeText: "*",
              localfile: "*",
            },
          },
        },
      },
    },

    {
      singularName: "categoria",
      queryParams: {
        populate: {
          titulo: "*",
          icono: "*",
          slug: "*",
          proyectos: {
            populate: {
              createdAt: "*",
            },
          },
        },
      },
    },
  ],
};

module.exports = strapiConfig;
