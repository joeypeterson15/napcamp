import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import UpdateBookingsForm from '../UpdateBookingsForm';

function UpdateBookingModal({booking}) {
    const [showModal, setShowModal] = useState(false);
    return (
        <>
          <button onClick={() => setShowModal(true)}>UPDATE</button>
          {showModal && (
            <Modal onClose={() => setShowModal(false)}>
              <UpdateBookingsForm booking={booking}/>
            </Modal>
          )}
        </>
      );
}

export default UpdateBookingModal;
