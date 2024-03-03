import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';

const modalRoot = document.getElementById('modals');

const Modal = () => {
  useEffect(() => {
    console.log('Modal is mounted');
    return () => {
      console.log('Modal is unmounted');
    };
  }, []);

  return ReactDOM.createPortal(
    <div className="modal-overlay">
      <div className="modal">
        <button className="close-button">X</button>
        <div className="modal-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
      </div>
    </div>,
    modalRoot
  );
};

export default Modal;