import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import UpdateBookingsForm from '../UpdateBookingsForm';

function UpdateBookingModal({booking, spot}) {
    const [showModal, setShowModal] = useState(false);
    return (
        <>
          {/* <button onClick={() => setShowModal(true)}>UPDATE</button> */}
          <div className="color-edit-icon">
            <i id="edit-icon-button" className={showModal ? '' : "far fa-edit"} onClick={() => setShowModal(true) }></i>

          </div>
          {showModal && (
            <Modal onClose={() => setShowModal(false)}>
              <UpdateBookingsForm spot={spot} setShowModal={setShowModal} showModal={showModal} booking={booking}/>
            </Modal>
          )}
        </>
      );
}

export default UpdateBookingModal;
