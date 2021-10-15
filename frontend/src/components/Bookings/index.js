import "./Bookings.css"

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useState } from 'react'
import { createBooking } from "../../store/bookings"


function Bookings ({ spotId }) {

    const userId = useSelector((state) => state.session?.user?.id);



    const dispatch = useDispatch();
    const [date, setDate] = useState('');
    const [startTime, setStartTime] = useState('');
    const [endTime, setEndTime] = useState('');
    const [guests, setGuests] = useState('guests');
    const [validationErrors, setValidationErrors] = useState([])
    const [validationSuccess, setValidationSuccess] = useState('')

    const onSubmit = (e) => {
        e.preventDefault();
        const errors = []

        if (new Date(date).getDate() > new Date(startTime).getDate()){
            errors.push('End date must be after start date')
            setValidationErrors(errors);
            return;
        }
        if (date.length < 1 || startTime.length < 1) {
            errors.push('Please book a start date and end date')
            setValidationErrors(errors);
            return;
        }

        const payload = {
            date,
            startTime,
            endTime,
            guests
        }
        setDate('');
        setStartTime('');
        setEndTime('');
        setGuests(0);
        setValidationErrors([])
        setValidationSuccess('Booked!')
        dispatch(createBooking(payload, spotId, userId))

    }

    return (
        <>
            <form onSubmit={onSubmit} id="booking-card-container" className="booking-card-container">
                <ul className="booking-errors">
                    {validationErrors.map((error) => (
                        <li key={error}>{error}</li>
                    ))}
                </ul>
                <div className="price text" id="bookings-price">Price</div>
                <div className="booking-dates">
                    <input value={date} onChange={(e) => setDate(e.target.value)} type="date" placeholder="start-date" id="border-left" className="text book-date"></input>
                    <input value={startTime} onChange={(e) => setStartTime(e.target.value)} type="time" placeholder="checkout-date" id="border-right"className="text book-date"></input>
                    <input value={endTime} onChange={(e) => setEndTime(e.target.value)} type="time" placeholder="checkout-date" id="border-right"className="text book-date"></input>
                </div>
                    <select name="guests" value={guests} onChange={(e) => setGuests(parseInt(e.target.value, 10))} className="guests-select-menu text">
                        <option>Guests</option>
                        <option type="click" className="text bookings-guests">1</option>
                        <option type="click" className="text bookings-guests">2</option>
                    </select>
                    <div className="time-requirment text">1 hour minimium</div>
                <button type="submit" id={validationSuccess ? "bookings-booked-button" : "bookings-button"} >{validationSuccess ? 'BOOKED!!': 'Instant Book'}</button>
            </form>
        </>
    )
}

export default Bookings;
