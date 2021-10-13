import "./Bookings.css"

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react'
import { createBooking } from "../../store/bookings"


function Bookings ({ spotId }) {

    const userId = useSelector((state) => state.session?.user?.id);

    const dispatch = useDispatch();
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [guests, setGuests] = useState(1);
    const [validationErrors, setValidationErrors] = useState([])
    const [validationSuccess, setValidationSuccess] = useState('')

    const onSubmit = (e) => {
        e.preventDefault();
        const errors = []

        if (new Date(startDate).getDate() > new Date(endDate).getDate()){
            errors.push('End date must be after start date')
            setValidationErrors(errors);
            return;
        }

        const payload = {
            startDate,
            endDate,
            guests
        }
        setStartDate('');
        setEndDate('');
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
                <div className="text" id="bookings-price">Price</div>
                <div className="booking-dates">
                    <input value={startDate} onChange={(e) => setStartDate(e.target.value)} type="date" placeholder="start-date" id="border-left" className="text book-date"></input>
                    <input value={endDate} onChange={(e) => setEndDate(e.target.value)} type="date" placeholder="checkout-date" id="border-right"className="text book-date"></input>
                </div>
                <label>
                    Guests
                    <select value={guests} onChange={(e) => setGuests(parseInt(e.target.value, 10))} className="guests-select-menu">
                        <option type="click" className="text bookings-guests">1</option>
                        <option type="click" className="text bookings-guests">2</option>
                    </select>
                </label>
                <button type="submit" id="bookings-button" >{validationSuccess.length > 0 ? validationSuccess : 'Request to Book'}</button>
            </form>
        </>
    )
}

export default Bookings;
