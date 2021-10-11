import "./Bookings.css"

function Bookings () {
    return (
        <>
            <div id="booking-card-container" className="booking-card-container">
                <div>Price</div>
                <div className="booking-dates">
                    <div>Check In</div>
                    <div>Check Out</div>
                </div>
                <div>Guests</div>
                <button>Request to Book</button>
            </div>
        </>
    )
}

export default Bookings;
