import * as React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import "../layouts/default.scss";

const Modal = ({ id, onClose, imagen }) => {
  return (
    <div className="modal" id={id}>
      <div className="modal__content">
        <button className="modal__boton" onClick={onClose}>
          &times;
        </button>
        <div className="modal__body">
          <GatsbyImage image={getImage(imagen)} alt="Test text" />
        </div>
      </div>
    </div>
  );
};

export default Modal;
