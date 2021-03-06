exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(
    `
      {
        articulos: allStrapiArticulos {
          edges {
            node {
              id
              slug
            }
          }
        }

        proyectos: allStrapiProyectos {
          edges {
            node {
              id
              slug
              categoria {
                slug
              }
            }
          }
        }

        categorias: allStrapiCategorias {
          edges {
            node {
              id
              slug
              proyectos {
                createdAt
              }
            }
          }
        }
      }
    `
  );

  if (result.errors) {
    throw result.errors;
  }

  const articulos = result.data.articulos.edges;
  const articuloTemplate = require.resolve("./src/templates/articulo.js");

  articulos.forEach((articulo) => {
    createPage({
      path: `/blog/${articulo.node.slug}`,
      component: articuloTemplate,
      context: {
        id: articulo.node.id,
      },
    });
  });

  const proyectos = result.data.proyectos.edges;
  const proyectoTemplate = require.resolve("./src/templates/proyecto.js");

  proyectos.forEach((proyecto) => {
    createPage({
      path: `/portafolio/${proyecto.node.categoria.slug}/${proyecto.node.slug}`,
      component: proyectoTemplate,
      context: {
        id: proyecto.node.id,
      },
    });
  });

  // Create blog articles pages
  const categorias = result.data.categorias.edges;
  const categoriaTemplate = require.resolve("./src/templates/categoria.js");

  categorias.forEach((categoria) => {
    createPage({
      path: `/portafolio/${categoria.node.slug}`,
      component: categoriaTemplate,
      context: {
        id: categoria.node.id,
      },
    });
  });
};
