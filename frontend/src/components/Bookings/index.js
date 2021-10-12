import "./Bookings.css"

function Bookings () {
    return (
        <>
            <div id="booking-card-container" className="booking-card-container">
                <div className="text" id="bookings-price">Price</div>
                <div className="booking-dates">
                    <div className="text book-date">Check In</div>
                    <div id="border-right"className="text book-date">Check Out</div>
                </div>
                <div className="text" id="bookings-guests">Guests</div>
                <button id="bookings-button" >Request to Book</button>
            </div>
        </>
    )
}

export default Bookings;
