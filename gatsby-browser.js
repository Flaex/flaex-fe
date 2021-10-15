/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
/* import "./src/layouts/default.scss"; */

export const onServiceWorkerUpdateReady = () => {
  const answer = window.confirm(
    `Hay nuevo contenido disponible en la aplicación. ` +
      `¿Deseas actualizar a la ultima versión?`
  );
  if (answer === true) {
    window.location.reload();
  }
};
