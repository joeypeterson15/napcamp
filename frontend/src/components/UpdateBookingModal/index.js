import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import UpdateBookingsForm from '../UpdateBookingsForm';
import { deleteBooking } from '../../store/bookings';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';



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
            <div id="edit-icon-button"  onClick={() => setShowModal(true) }>
              <MoreHorizIcon></MoreHorizIcon>
            </div>

          {showModal && (
            <Modal onClose={() => setShowModal(false)}>
              <UpdateBookingsForm spot={spot} setShowModal={setShowModal} showModal={showModal} booking={booking}/>
              <form onSubmit={cancelBooking(booking.spotId)}>
                  <button className="update-booking-button" type="submit">Cancel Booking</button>
              </form>
              <button className="update-booking-button cancel" type="submit" onClick={() => setShowModal(false) }>Cancel</button>
            </Modal>
          )}
        </>
      );
}

export default UpdateBookingModal;
