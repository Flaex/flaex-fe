import * as React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const Modal = ({ id, onClose, imagen }) => {
  const estilo = {
    display: "none",
  };
  return (
    <div className="modal" style={estilo} id={id}>
      <div className="modal__content modal__contenido">
        <button className="modal__boton" onClick={onClose}>
          &times;
        </button>
        <div className="modal__body modal__cuerpo">
          <GatsbyImage image={getImage(imagen)} alt="Test text" />
        </div>
      </div>
    </div>
  );
};

export default Modal;
