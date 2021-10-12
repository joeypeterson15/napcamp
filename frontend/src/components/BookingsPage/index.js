import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getBookings } from '../../store/bookings';
import { getSpots } from '../../store/spots';

export default function BookingsPage () {

    const userId = useSelector((state) => state.session?.user?.id);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getBookings(userId))
        dispatch(getSpots())
    }, [dispatch, userId])

    const bookings = useSelector(state => Object.values(state.bookings))
    console.log('ellllloooo', bookings)
    const spots = useSelector(state => Object.values(state.spots))
    console.log(spots)

    return (
        <>
            <div className="bookings-container">
                {bookings.map((booking) => (
                    <div>
                        <div>{booking.startDate}</div>
                        <img src={spots.filter((spot) => spot.id === bookings.spotId).imageUrl}></img>
                    </div>
                ))}
            </div>
        </>
    )
}
