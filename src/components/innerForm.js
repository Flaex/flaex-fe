import * as React from "react";

const Innerform = ({ titulo }) => {
  return (
    <div className="formulario">
      <h3 className="formulario__titulo">{titulo}</h3>
      <p>
        ¡Trabajemos en tu próximo proyecto! Enviame un mensaje por el formulario o visita mis redes sociales, en el pie de página están los enlaces.
      </p>

      <form
        className="formulario__form"
        method="POST"
        data-netlify="true"
        name="inner-contact"
        action="/gracias/"
      >
        <label>
          <input type="hidden" name="bot-field" />
          <input type="hidden" name="form-name" value="inner-contact" />
        </label>
        <div>
          <input type="text" name="name" placeholder="Nombre y Apellido" />
        </div>
        <div>
          <input type="email" name="email" placeholder="Email" />
        </div>
        <div>
          <textarea name="message" placeholder="Mensaje" />
        </div>
        <input type="submit" value="Enviar mensaje ➤" />
      </form>
    </div>
  );
};

export default Innerform;
