import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import UpdateBookingsForm from '../UpdateBookingsForm';

function UpdateBookingModal({booking}) {
    const [showModal, setShowModal] = useState(false);
    return (
        <>
          {/* <button onClick={() => setShowModal(true)}>UPDATE</button> */}
          <div className="color-edit-icon">
            <i id="edit-icon-button" class={showModal ? '' : "far fa-edit"} onClick={() => setShowModal(true) }></i>

          </div>
          {showModal && (
            <Modal onClose={() => setShowModal(false)}>
              <UpdateBookingsForm setShowModal={setShowModal} showModal={showModal} booking={booking}/>
            </Modal>
          )}
        </>
      );
}

export default UpdateBookingModal;
