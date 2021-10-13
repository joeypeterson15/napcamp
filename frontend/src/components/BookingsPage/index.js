import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { getBookings } from '../../store/bookings';
import { getSpots } from '../../store/spots';
import { deleteBooking } from '../../store/bookings';
import { useHistory } from 'react-router-dom';
import './BookingsPage.css'

export default function BookingsPage () {

    const [updateForm, setUpdateForm] = useState('hide-form')

    const history = useHistory();
    // const [spotId, setSpotId] = useState(0)
    const userId = useSelector((state) => state.session?.user?.id);
    const userName = useSelector((state) => state.session?.user?.username)

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getBookings(userId))
        dispatch(getSpots())
    }, [dispatch, userId])

    const bookings = useSelector(state => Object.values(state.bookings))
    const spots = useSelector(state => Object.values(state.spots))

    const cancelBooking = (spotId) => (e) => {
        e.preventDefault();
        dispatch(deleteBooking(spotId, userId));

        let deletedBooking;
        if (deletedBooking) {
            dispatch(getBookings(userId))
            history.push('/trips')
        }

    }

    return (
        <>
            <div className="userName-bookings text">{userName}'s Trips:</div>
            <div className="bookings-container">
                {bookings.map((booking) => (
                    <div className="bookings-card">
                        <div>start date: {booking.startDate}</div>
                        <div>end date: {booking.endDate}</div>
                        <img className="bookings-image" alt={booking.id} src={spots.find((spot) => spot.id === booking.spotId).imageUrl}></img>
                        <form onSubmit={cancelBooking(booking.spotId)}>
                            <button type="submit">Cancel Booking</button>
                        </form>
                            <button value={updateForm} onClick={() => setUpdateForm('show-form')} type="click">Update Booking</button>
                        <form>
                                <div className={updateForm}>
                                    <input></input>
                                </div>
                        </form>
                    </div>
                ))}
            </div>
        </>
    )
}