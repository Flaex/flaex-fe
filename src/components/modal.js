import * as React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import "../layouts/default.scss"
const Modal = ({ id, onClose, imagen }) => {
  return (
    <div className="modal estilo" id={id}>
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
