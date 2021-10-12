import "./Bookings.css"

import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react'


function Bookings ({ spotId }) {
    const dispatch = useDispatch();
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('')
    const [guests, setGuests] = useState(0)

    const onSubmit = (e) => {
        e.preventDefault();

        const payload = {
            startDate,
            endDate,
            guests
        }
        setStartDate('');
        setEndDate('');
        setGuests(0);

        dispatch(createBookings(payload, spotId, userId))

    }

    return (
        <>
            <form onSubmit={onSubmit} id="booking-card-container" className="booking-card-container">
                <div className="text" id="bookings-price">Price</div>
                <div className="booking-dates">
                    <input value={startDate} onChange={(e) => setStartDate(e.target.value)} type="date" placeholder="start-date" className="text book-date"></input>
                    <input value={endDate} onChange={(e) => setEndDate(e.target.value)} type="date" placeholder="checkout-date" id="border-right"className="text book-date"></input>
                </div>
                <select value={guests} onChange={(e) => setGuests(e.target.value)} className="guests-select-menu">
                    <option type="click" className="text bookings-guests" >1 guests</option>
                    <option type="click" className="text bookings-guests" >2 guests</option>
                </select>
                <button type="submit" id="bookings-button" >Request to Book</button>
            </form>
        </>
    )
}

export default Bookings;
