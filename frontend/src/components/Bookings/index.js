import "./Bookings.css"

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react'
import { createBooking } from "../../store/bookings"
import CategorySpots from "../CategorySpots";
import { updateMyMoney } from "../../store/user";


function Bookings ({ spotId, spot, spots, currentSpot, category, user }) {

    const userId = useSelector((state) => state.session?.user?.id);



    const dispatch = useDispatch();
    const [date, setDate] = useState('');
    const [startTime, setStartTime] = useState('');
    const [endTime, setEndTime] = useState('');
    const [guests, setGuests] = useState('guests');
    const [validationErrors, setValidationErrors] = useState([])
    const [validationSuccess, setValidationSuccess] = useState('')
    console.log('price', spot?.price, Number(spot?.price.slice(1, spot?.price.length)))



    const onSubmit = (e) => {
        e.preventDefault();


        const errors = []
        if (date.length < 1) {
            errors.push('Please choose the date you would like to nap')
            setValidationErrors(errors);
            return;
        }
        if (startTime === '') {
            errors.push('Please provide a start time')
            return;
        }
        if (endTime.length < 1) {
            errors.push('Please provide an end time')
            return;
        }
        if (endTime < startTime){
            errors.push('Please provide an end time after the start time')
            setValidationErrors(errors);
            return;
        }

        if (spot?.price !== null) {
            let money = user?.money - Number(spot?.price.slice(1, spot?.price.length))
            // money = money < 0 ? 0 : money
            const moneyPayload = {
                money
            }
            dispatch(updateMyMoney(userId, moneyPayload))
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
        <div className="bookings-outer-container">
            <form onSubmit={onSubmit} id="booking-card-container" className="booking-card-container">
                <ul className="booking-errors">
                    {validationErrors.map((error) => (
                        <li key={error}>{error}</li>
                    ))}
                </ul>
                <div className="price text" id="bookings-price">{spot?.price === null ? 'FREE' : spot?.price}</div>
                <div className="booking-dates">
                    <input name="booking-date-label" value={date} onChange={(e) => setDate(e.target.value)} type="date" id="date-border-left" className="text select-date book-date"></input>
                    <input value={startTime} onChange={(e) => setStartTime(e.target.value)} type="time" placeholder="checkout-date" id="border-right"className="text book-date"></input>
                    <input value={endTime} onChange={(e) => setEndTime(e.target.value)} type="time" placeholder="checkout-date" id="border-left"className="text book-date"></input>
                </div>
                    <select name="guests" value={guests} onChange={(e) => setGuests(parseInt(e.target.value, 10))} className="guests-select-menu text">
                        <option>Guests</option>
                        <option type="click" className="text bookings-guests">1</option>
                        <option type="click" className="text bookings-guests">2</option>
                    </select>
                    <div className="time-requirment text">1 hour minimium</div>
                <button type="submit" id={validationSuccess ? "bookings-booked-button" : "bookings-button"} >{validationSuccess ? <div className="checked-icon-div"><span>Booked</span><i class="pad-left fas fa-check"></i></div>: 'Instant Book'}</button>
            </form>
            <CategorySpots propSpot={spot} category={category} spots={spots} currentSpot={currentSpot}/>
        </div>
    )
}

export default Bookings;
