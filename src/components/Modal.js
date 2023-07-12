import React, { useRef } from "react";
import ReactDom from "react-dom";
import "../styles/Modal.css";
import Login from "./LoginModal";
export const Modal = ({ setShowModal }) => {
  const modalRef = useRef();
  const closeModal = (e) => {
    if (e.target === modalRef.current) {
      setShowModal(false);
    }
  };
  return ReactDom.createPortal(
    <div className="container" ref={modalRef} onClick={closeModal}>
      <div className="modal">
        <button className="close-button" onClick={() => setShowModal(false)}>
          X
        </button>
        <Login />
      </div>
    </div>,
    document.getElementById("portal")
  );
};
