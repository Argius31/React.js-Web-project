import React from 'react';
import ReactDOM from 'react-dom';
import '../style/ConfirmationModal.css'

function ConfirmationModal({ isOpen, onClose, onConfirm }) {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="modal-overlay">
      <div className="modal-content">
        <p>Apakah anda ingin masuk ke link ini?</p>
        <button onClick={onConfirm} className="confirm-button">Yes</button>
        <button onClick={onClose} className="cancel-button">No</button>
      </div>
    </div>,
    document.getElementById('modal-root') 
  );
}

export default ConfirmationModal;
