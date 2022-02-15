import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import UpdateBookingsForm from '../UpdateBookingsForm';
import { deleteBooking } from '../../store/bookings';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';


function UpdateBookingModal({booking, spot}) {

  const dispatch = useDispatch()

  const userId = useSelector((state) => state.session?.user?.id);


  const cancelBooking = (spotId) => (e) => {
    e.preventDefault();
    dispatch(deleteBooking(spotId, userId));

}

    const [showModal, setShowModal] = useState(false);
    return (
        <>
          {/* <button onClick={() => setShowModal(true)}>UPDATE</button> */}
          <div className="color-edit-icon">
          {/* <i class="fa-solid fa-ellipsis"></i> */}
            <i id="edit-icon-button" className={showModal ? '' : "far fa-edit"} onClick={() => setShowModal(true) }></i>
          </div>
          {showModal && (
            <Modal onClose={() => setShowModal(false)}>
              <UpdateBookingsForm spot={spot} setShowModal={setShowModal} showModal={showModal} booking={booking}/>
              <form onSubmit={cancelBooking(booking.spotId)}>
                  <button className="update-booking-button" type="submit">Cancel Booking</button>
              </form>
            </Modal>
          )}
        </>
      );
}

export default UpdateBookingModal;
