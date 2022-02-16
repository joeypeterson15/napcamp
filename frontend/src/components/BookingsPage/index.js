
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { getBookings } from '../../store/bookings';
import { getSpots } from '../../store/spots';
import { deleteBooking } from '../../store/bookings';
import UpdateBookingModal from '../UpdateBookingModal';
import { Link } from 'react-router-dom';
import { Modal } from '../../context/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import BookingExpand from '../BookingExpand/BookingExpand';
import './BookingsPage.css'


export default function BookingsPage () {
    const dispatch = useDispatch();

    const [isModal, setIsModal] = useState(false)
    const [isExpand, setIsExpand] = useState(false)




    const isBackgroundGrey = false;

    const userId = useSelector((state) => state.session?.user?.id);
    const userName = useSelector((state) => state.session?.user?.username)

    const convertTime = function(oldTime){
        var time = oldTime.split(':');
        var hours = time[0];
        var minutes = time[1];
        let timeValue = "" + ((hours >12) ? hours - 12 === 0 ? 12 : hours-12 :hours == 0 ? 12 : hours);
            timeValue += (minutes < 10) ? ':' + minutes : ":" + minutes;
            timeValue += (hours >= 12) ? " pm" : " am";
            return timeValue;
        }


    useEffect(() => {
        if (userId){
            dispatch(getBookings(userId))
        }
        dispatch(getSpots())
    }, [dispatch, userId])

    const bookings = useSelector(state => Object.values(state.bookings))
    const spots = useSelector(state => Object.values(state.spots))

    // const expand = () => {
    //     !isExpand ? setIsExpand(true) : setIsExpand(false)
    // }

    return (
        <div className={isBackgroundGrey ? 'background-grey' : 'background-white'}>
            <div className="userName-bookings text">{userName}'s Trips:</div>
            <div className="div-line-trips"></div>
            <div className="bookings-container">
                {bookings.map((booking) => (
                    <BookingExpand booking={booking} spots={spots} />
                    // <div key={booking.id} className={isExpand ? "bookings-card-explore" : "bookings-card"} onClick={() => expand()}>

                    //     <img className={isExpand ? "bookings-image-expand" : "bookings-image"} alt={booking.id} src={spots.find((spot) => spot.id === booking.spotId)?.imageUrl}></img>
                    //     <BookingExpand booking={booking} spots={spots} />
                    //     <div className={isExpand ? "bottom-booking-card-expand" : "bottom-booking-card"}>

                    //         <div className="flexx-me">

                    //             <div className="booking-title text">{spots.find((spot) => spot.id === booking.spotId)?.name}</div>
                    //             <div className="edit-icon-display">
                    //                 <UpdateBookingModal spot={spots.find((spot) => spot.id === booking.spotId)} booking={booking}/>
                    //             </div>

                    //         </div>





                    //             <div key={booking.date} className="text booking-data-plus-category-div">
                    //                 <div>Date:</div>
                    //                 <div>
                    //                     {new Intl.DateTimeFormat('en-US', { month: 'long' }).format(new Date(booking.date))} {new Date(booking.date).getDate() + 1}th, 2021
                    //                 </div>
                    //             </div>
                    //             <div key={booking.date} className="text booking-data-plus-category-div">
                    //                 <div>Check-in:</div>
                    //                 <div>
                    //                 {convertTime(booking.startTime.toString())}

                    //                 </div>
                    //             </div>
                    //             <div key={booking.date} className="text booking-data-plus-category-div">
                    //                 <div>Check-out:</div>
                    //                 <div>
                    //                     {convertTime(booking.endTime.toString())}
                    //                 </div>
                    //             </div>
                    //             <div key={booking.date} className="text booking-data-plus-category-div">
                    //                 <div>Guests :</div>
                    //                 <div>
                    //                     {booking.guests}
                    //                 </div>
                    //             </div>

                    //     </div>

                    // </div>



                ))}
            </div>
        </div>

    )
}
