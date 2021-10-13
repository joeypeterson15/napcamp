
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { getBookings } from '../../store/bookings';
import { getSpots } from '../../store/spots';
import { deleteBooking } from '../../store/bookings';
import { useHistory } from 'react-router-dom';
import { updateOneBooking } from '../../store/bookings';
import './BookingsPage.css'

export default function BookingsPage () {

    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('')
    const [guests, setGuests] = useState(1)
    // const [updateForm, setUpdateForm] = useState('hide-form')

    const history = useHistory();
    // const [spotId, setSpotId] = useState(0)
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

    const updateBooking = (spotId) => (e) => {
        e.preventDefault()
        const payload = {
            startDate,
            endDate,
            guests
        }
        dispatch(updateOneBooking(payload, spotId, userId))
    }

    return (
        <>
            <div className="userName-bookings text">{userName}'s Trips:</div>
            <div className="bookings-container">
                {bookings.map((booking) => (
                    <div className="bookings-card">
                        <div>start date: {new Date(booking.startDate).getDate()}th</div>
                        <div>end date: {new Date(booking.endDate).getDate()}th</div>
                        <img className="bookings-image" alt={booking.id} src={spots.find((spot) => spot.id === booking.spotId).imageUrl}></img>
                        <form onSubmit={cancelBooking(booking.spotId)}>
                            <button type="submit">Cancel Booking</button>
                        </form>

                        <form onSubmit={updateBooking(booking.spotId)} className='update-booking-form'>
                                <div className="booking-dates">
                                    <input value={startDate} onChange={(e) => setStartDate(e.target.value)} type="date" id="border-left" className="text book-date"></input>
                                    <input value={endDate} onChange={(e) => setEndDate(e.target.value)} type="date" id="border-right"className="text book-date"></input>
                                </div>
                                    <select value={guests} onChange={(e) => setGuests(parseInt(e.target.value, 10))}>
                                        <option type="click" className="text bookings-guests">1</option>
                                        <option type="click" className="text bookings-guests">2</option>
                                    </select>
                                    <button type="submit">Update Booking</button>
                        </form>
                    </div>
                ))}
            </div>
        </>
    )
}
