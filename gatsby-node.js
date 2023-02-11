exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(
    `
      {
        articulos: allStrapiArticulo {
          nodes {
            id
            slug
          }
        }

        proyectos: allStrapiProyecto {
          nodes {
            id
            slug
            categoria {
              slug
            }
          }
        }

        categorias: allStrapiCategoria {
          nodes {
            id
            slug
            proyectos {
              createdAt
            }
          }
        }
      }
    `
  );

  if (result.errors) {
    throw result.errors;
  }

  const articulos = result.data.articulos.nodes;
  const articuloTemplate = require.resolve("./src/templates/articulo.js");

  articulos.forEach((articulo) => {
    createPage({
      path: `/blog/${articulo.slug}`,
      component: articuloTemplate,
      context: {
        id: articulo.id,
      },
    });
  });

  const proyectos = result.data.proyectos.nodes;
  const proyectoTemplate = require.resolve("./src/templates/proyecto.js");

  proyectos.forEach((proyecto) => {
    createPage({
      path: `/portafolio/${proyecto.categoria.slug}/${proyecto.slug}`,
      component: proyectoTemplate,
      context: {
        id: proyecto.id,
      },
    });
  });

  // Create blog articles pages
  const categorias = result.data.categorias.nodes;
  const categoriaTemplate = require.resolve("./src/templates/categoria.js");

  categorias.forEach((categoria) => {
    createPage({
      path: `/portafolio/${categoria.slug}`,
      component: categoriaTemplate,
      context: {
        id: categoria.id,
      },
    });
  });
};
