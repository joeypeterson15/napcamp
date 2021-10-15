
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getBookings } from '../../store/bookings';
import { getSpots } from '../../store/spots';
import { deleteBooking } from '../../store/bookings';
import UpdateBookingModal from '../UpdateBookingModal';
import { Link } from 'react-router-dom';
import './BookingsPage.css'

export default function BookingsPage () {
    const isBackgroundGrey = false;

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
        <div className={isBackgroundGrey ? 'background-grey' : 'background-white'}>
            <div className="userName-bookings text">{userName}'s Trips:</div>
            <div id="div-line-trips"></div>
            <div className="bookings-container">
                {bookings.map((booking) => (
                    <div className="bookings-card">
                        <Link exact to={`/spots/${(booking?.spotId)}}`}>
                            <img className="bookings-image" alt={booking.id} src={spots.find((spot) => spot.id === booking.spotId)?.imageUrl}></img>
                        </Link>
                        <div className="text">Date: {new Intl.DateTimeFormat('en-US', { month: 'long' }).format(new Date(booking.date))} {new Date(booking.date).getDate() + 1}th, 2021</div>
                        <div className="text">Check-in: {booking.startTime}</div>
                        <div className="text">Check-out: {booking.endTime}</div>
                        <div className="text">Guests : {booking.guests}</div>
                        <UpdateBookingModal spot={spots.find((spot) => spot.id === booking.spotId)} booking={booking}/>
                        <form onSubmit={cancelBooking(booking.spotId)}>
                            <button className="cancel-booking-button" type="submit">Cancel Booking</button>
                        </form>

                    </div>
                ))}
            </div>
        </div>
    )
}
