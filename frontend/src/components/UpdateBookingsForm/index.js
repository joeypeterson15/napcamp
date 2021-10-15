import { updateOneBooking } from '../../store/bookings';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import './UpdateBookingsForm.css'



function UpdateBookingsForm ({ booking, showModal, setShowModal, spot }) {

    const [date, setDate] = useState(booking.date);
    const [startTime, setStartTime] = useState(booking.startTime)
    const [endTime, setEndTime] = useState(booking.endTime)
    const [guests, setGuests] = useState('guests');
    const [validationSuccess, setValidationSuccess] = useState(false)

    const userId = useSelector((state) => state.session?.user?.id);

    const dispatch = useDispatch();

    const updateBooking = (spotId) => (e) => {
        e.preventDefault()
        const payload = {
            date,
            startTime,
            endTime,
            guests
        }
        setDate('');
        setStartTime('');
        setEndTime('');
        setShowModal(false)
        setValidationSuccess(true)
        dispatch(updateOneBooking(payload, spotId, userId))
    }

    return (
        <div className="update-booking-container">
            <img alt='' className="update-booking-image" src={spot.imageUrl}></img>

        <form onSubmit={updateBooking(booking.spotId)} className={showModal ?'update-booking-form' : 'hide-update-form'}>
                                <div className={validationSuccess ? "hide-booking-dates" : "booking-dates"}>
                                    <input value={date} onChange={(e) => setDate(e.target.value)} type="date" id="border-left" className="text book-date"></input>
                                </div>
                                    <input value={startTime} onChange={(e) => setStartTime(e.target.value)} type="time" id="border-right" className="text book-date"></input>
                                    <input value={endTime} onChange={(e) => setEndTime(e.target.value)} type="time" id="border-right" className="text book-date"></input>
                                    <select className="guests-select" value={guests} onChange={(e) => setGuests(parseInt(e.target.value, 10))}>
                                        <option>Guests</option>
                                        <option type="click" className="text bookings-guests">1</option>
                                        <option type="click" className="text bookings-guests">2</option>
                                    </select>
                                <button className={validationSuccess ? "green-update-button" : "update-booking-button"} type="submit">{validationSuccess ? 'Updated!' : 'Update Booking'}</button>

                        </form>
        </div>
    )
}

export default UpdateBookingsForm;
