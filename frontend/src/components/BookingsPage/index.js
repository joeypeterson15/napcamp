
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
    const dispatch = useDispatch();




    const isBackgroundGrey = false;

    const userId = useSelector((state) => state.session?.user?.id);
    const userName = useSelector((state) => state.session?.user?.username)

    const convertTime = function(oldTime){
        var time = oldTime.split(':');
        var hours = time[0];
        var minutes = time[1];
        let timeValue = "" + ((hours >12) ? hours -12 :hours);
            timeValue += (minutes < 10) ? ':' + minutes : ":" + minutes;
            timeValue += (hours >= 12) ? " pm" : " am";
            return timeValue;
        }


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
            <div className="div-line-trips"></div>
            <div className="bookings-container">
                {bookings.map((booking) => (
                    <div key={booking.id} className="bookings-card">
                        <Link to={`/spots/${booking.spotId}`}>
                            <img className="bookings-image" alt={booking.id} src={spots.find((spot) => spot.id === booking.spotId)?.imageUrl}></img>
                        </Link>
                        <div className="bottom-booking-card">
                            <h2 className="text">{spots.find((spot) => spot.id === booking.spotId)?.name}</h2>
                            <div key={booking.date} className="text booking-data-plus-category-div">
                                <div>Date:</div>
                                <div>
                                    {new Intl.DateTimeFormat('en-US', { month: 'long' }).format(new Date(booking.date))} {new Date(booking.date).getDate() + 1}th, 2021
                                </div>
                            </div>
                            <div key={booking.date} className="text booking-data-plus-category-div">
                                <div>Check-in:</div>
                                <div>
                                 {convertTime(booking.startTime.toString())}

                                </div>
                            </div>
                            <div key={booking.date} className="text booking-data-plus-category-div">
                                <div>Check-out:</div>
                                <div>
                                    {convertTime(booking.endTime.toString())}
                                </div>
                            </div>
                            <div key={booking.date} className="text booking-data-plus-category-div">
                                <div>Guests :</div>
                                <div>
                                     {booking.guests}
                                </div>
                            </div>
                            {/* <div key={booking.startTime} className="text">Check-in: {convertTime(booking.startTime.toString())}</div>
                            <div key={booking.endTime} className="text">Check-out: {convertTime(booking.endTime.toString())}</div>
                            <div key={booking.guests} className="text">Guests : {booking.guests}</div> */}
                            <UpdateBookingModal spot={spots.find((spot) => spot.id === booking.spotId)} booking={booking}/>
                            <form onSubmit={cancelBooking(booking.spotId)}>
                                <button className="cancel-booking-button" type="submit">Cancel Booking</button>
                            </form>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
