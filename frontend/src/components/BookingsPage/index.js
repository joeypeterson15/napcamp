
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { getBookings } from '../../store/bookings';
import { getSpots } from '../../store/spots';
import { deleteBooking } from '../../store/bookings';
import { useHistory } from 'react-router-dom';
import { updateOneBooking } from '../../store/bookings';
import  UpdateBookingsForm  from '../UpdateBookingsForm';
import UpdateBookingModal from '../UpdateBookingModal';
import './BookingsPage.css'

export default function BookingsPage () {


    const history = useHistory();
    const userId = useSelector((state) => state.session?.user?.id);
    const userName = useSelector((state) => state.session?.user?.username)

    const dispatch = useDispatch();
    useEffect(() => {
        if (userId){
            dispatch(getBookings(userId))
        }
        dispatch(getSpots())
    }, [dispatch, userId])

    const bookings = useSelector(state => Object.values(state.bookings))
    const spots = useSelector(state => Object.values(state.spots))

    const cancelBooking = (spotId) => (e) => {
        e.preventDefault();
        dispatch(deleteBooking(spotId, userId));

    }

    return (
        <>
            <div className="userName-bookings text">{userName}'s Trips:</div>
            <div className="bookings-container">
                {bookings.map((booking) => (
                    <div className="bookings-card">
                        <div className="text">{new Intl.DateTimeFormat('en-US', { month: 'long' }).format(new Date(booking.date))} {new Date(booking.date).getDate() + 1}th, 2021</div>
                        <div className="text">NapTime : {booking.startTime} - {booking.endTime}</div>
                        <div className="text">Guests : {booking.guests}</div>

                        <img className="bookings-image" alt={booking.id} src={spots.find((spot) => spot.id === booking.spotId)?.imageUrl}></img>
                        <form onSubmit={cancelBooking(booking.spotId)}>
                            <button className="cancel-booking-button" type="submit">Cancel Booking</button>
                        </form>
                        {/* <i onClick={cancelBooking(booking.spotId)} class="fas fa-eraser"></i> */}

                        <UpdateBookingModal booking={booking}/>
                    </div>
                ))}
            </div>
        </>
    )
}
