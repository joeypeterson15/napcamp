import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import './ImageModal.css'

function ImageModal ({ spot }) {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <div className="arrow-icon-modal-left">
                <i id="arrow-icon-left" className={showModal ? '' : "fas fa-chevron-circle-left"} onClick={() => setShowModal(true)}></i>
            </div>
            <div className="arrow-icon-modal-right">
                <i className={showModal ? '' : "fas fa-chevron-circle-right"} onClick={() => setShowModal(true)}></i>
            </div>
            {showModal && (
            <Modal onClose={() => setShowModal(false)}>
              <img src={spot?.imageUrl}></img>
            </Modal>
          )}
        </>
    )
}

export default ImageModal;
