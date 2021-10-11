import "./Bookings.css"

function Bookings () {
    return (
        <>
            <div id="booking-card-container" className="booking-card-container">
                <div id="bookings-price">Price</div>
                <div className="booking-dates">
                    <div className="book-date">Check In</div>
                    <div className="book-date">Check Out</div>
                </div>
                <div id="bookings-guests">Guests</div>
                <button id="bookings-button" >Request to Book</button>
            </div>
        </>
    )
}

export default Bookings;
