import "./Bookings.css"

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react'
import { createBooking } from "../../store/bookings"
import CategorySpots from "../CategorySpots";
import { updateMyMoney } from "../../store/user";
import { Modal } from "../../context/Modal";
import { TryRounded } from "@mui/icons-material";


function Bookings ({ spotId, spot, spots, currentSpot, category, user }) {

    const userId = useSelector((state) => state.session?.user?.id);



    const dispatch = useDispatch();
    const [date, setDate] = useState('');
    const [startTime, setStartTime] = useState('');
    const [endTime, setEndTime] = useState('');
    const [guests, setGuests] = useState('guests');
    const [validationErrors, setValidationErrors] = useState([])
    const [validationSuccess, setValidationSuccess] = useState('')
    const [showModal1, setShowModal1] = useState(false)
    const [showModal2, setShowModal2] = useState(false)


    const convertTime = function(oldTime){
        var time = oldTime.split(':');
        var hours = time[0];
        var minutes = time[1];
        let timeValue = "" + ((hours >12) ? hours - 12 === 0 ? 12 : hours-12 :hours == 0 ? 12 : hours);
            timeValue += (minutes < 10) ? ':' + minutes : ":" + minutes;
            timeValue += (hours >= 12) ? " pm" : " am";
            return timeValue;
        }

    const handleModal = (e) => {
        e.preventDefault()

        // const errors = []
        // if (date.length < 1) {
        //     errors.push('Please choose the date you would like to nap')
        //     setValidationErrors(errors);
        //     return;
        // }
        // if (startTime === '') {
        //     errors.push('Please provide a start time')
        //     return;
        // }
        // if (endTime.length < 1) {
        //     errors.push('Please provide an end time')
        //     return;
        // }
        // if (endTime < startTime){
        //     errors.push('Please provide an end time after the start time')
        //     setValidationErrors(errors);
        //     return;
        // }
        setShowModal1(true)
    }

    const handleModal2 = (e) => {
        if (spot?.price) {
            setShowModal1(false)
            setShowModal2(true)
        }
        else {
            onSubmit(e)
        }
    }


    const onSubmit = (e) => {
        e.preventDefault();


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
        setShowModal1(false)
        setShowModal2(false)
    }



    return (
        <div className="bookings-outer-container">
            <form id="booking-card-container" className="booking-card-container">
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
                <button onClick={(e) => handleModal(e)} id={validationSuccess ? "bookings-booked-button" : "bookings-button"} >{validationSuccess ? <div className="checked-icon-div"><span>Booked</span><i class="pad-left fas fa-check"></i></div>: 'Instant Book'}</button>
            </form>
            <CategorySpots propSpot={spot} category={category} spots={spots} currentSpot={currentSpot}/>

            {showModal1 && (
                <Modal>
                    <div className="booking-confirmation-div">
                                <h4 id="confirmation-heading">
                                    Please confirm your booking information:
                                </h4>

                                <div className="booking-info-confirmation-div">
                                    <div className="text booking-data-plus-category-div">
                                        <div>Date:</div>
                                        <div>
                                            {new Intl.DateTimeFormat('en-US', { month: 'long' }).format(new Date(date))} {new Date(date).getDate() + 1}th, 2021
                                        </div>
                                    </div>
                                    <div className="text booking-data-plus-category-div">
                                        <div>Check-in:</div>
                                        <div>
                                            {convertTime(startTime.toString())}

                                        </div>
                                    </div>

                                    <div className="text booking-data-plus-category-div">
                                        <div>Check-out:</div>
                                        <div>
                                            {convertTime(endTime.toString())}
                                        </div>
                                    </div>

                                    <div className="text booking-data-plus-category-div">
                                        <div>Guests :</div>
                                        <div>
                                            {guests}
                                        </div>
                                    </div>
                                </div>


                                <div className="confirmation-booking-buttons-div">
                                    <button className="bolder confirmation-button" onClick={(e) => handleModal2(e)}>Yes, book this location</button>
                                    {/* <button className="no-top-border confirmation-button" onClick={() => setShowModal1(false)}>Cancel</button> */}
                                </div>
                    </div>
                </Modal>
            )}
            {showModal2 && (
                <Modal>
                    <div className="booking-confirmation-div">
                        <div className="change-size-text" id="confirmation-heading">Would you like to use your napcamp funds to purchase this booking?</div>

                        <div className="modal-balance-div">Current Balance:
                            <div className="balance-circle-modal">
                                ${user?.money}
                            </div>
                        </div>

                        <div className="modal2-buttons confirmation-booking-buttons-div">

                            <button className="confirmation-button" onClick={(e) => onSubmit(e)}>Yes</button>
                            <button className="pad-pad confirmation-button" onClick={() => setShowModal2(false)}>Cancel booking</button>
                        </div>
                    </div>
                </Modal>
            )}
        </div>
    )
}

export default Bookings;
