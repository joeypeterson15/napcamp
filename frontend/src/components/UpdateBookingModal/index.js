import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import UpdateBookingsForm from '../UpdateBookingsForm';

function UpdateBookingModal({booking}) {
    const [showModal, setShowModal] = useState(false);
    return (
        <>
          {/* <button onClick={() => setShowModal(true)}>UPDATE</button> */}
          <i id="edit-icon-button" class={showModal ? '' : "far fa-edit"} onClick={() => setShowModal(true) }></i>
          {showModal && (
            <Modal onClose={() => setShowModal(false)}>
              <UpdateBookingsForm setShowModal={setShowModal} showModal={showModal} booking={booking}/>
            </Modal>
          )}
        </>
      );
}

export default UpdateBookingModal;
