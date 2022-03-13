import { useState, useEffect } from "react"
import UpdateBookingModal from "../UpdateBookingModal"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faCoffee, faSolid, faEllipsis} from "@fortawesome/free-solid-svg-icons"
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
// import { Icon } from '@mui/material';
import { SvgIcon } from '@mui/material'
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';


function BookingExpand ({booking, spots}) {

    const [isExpand, setIsExpand] = useState(false)

    const convertTime = function(oldTime){
        var time = oldTime.split(':');
        var hours = time[0];
        var minutes = time[1];
        let timeValue = "" + ((hours >12) ? hours - 12 === 0 ? 12 : hours-12 :hours == 0 ? 12 : hours);
            timeValue += (minutes < 10) ? ':' + minutes : ":" + minutes;
            timeValue += (hours >= 12) ? " pm" : " am";
            return timeValue;
        }
        const expand = () => {
            !isExpand ? setIsExpand(true) : setIsExpand(false)
        }

    return (




            <div className="booking-outer-container">
                <div key={booking.id} className={isExpand ? "bookings-card-expand" : "bookings-card"} onClick={() => expand()}>

                        <img className={isExpand ? "bookings-image-expand" : "bookings-image"} alt={booking.id} src={spots.find((spot) => spot.id === booking.spotId)?.imageUrl}></img>

                        <div className={isExpand ? "bottom-booking-card-expand" : "bottom-booking-card"}>

                            <div className="flexx-me">

                                <div className="booking-title text">{spots.find((spot) => spot.id === booking.spotId)?.name}</div>
                                <div className="edit-icon-display">
                                    <UpdateBookingModal spot={spots.find((spot) => spot.id === booking.spotId)} booking={booking}/>
                                </div>

                            </div>





                                <div className="text booking-data-plus-category-div">
                                    <div>Date:</div>
                                    <div>
                                        {new Intl.DateTimeFormat('en-US', { month: 'long' }).format(new Date(booking.date))} {new Date(booking.date).getDate() + 1}th, 2021
                                    </div>
                                </div>
                                <div className="text booking-data-plus-category-div">
                                    <div>Check-in:</div>
                                    <div>
                                    {convertTime(booking.startTime.toString())}

                                    </div>
                                </div>
                                <div className="text booking-data-plus-category-div">
                                    <div>Check-out:</div>
                                    <div>
                                        {convertTime(booking.endTime.toString())}
                                    </div>
                                </div>
                                <div className="text booking-data-plus-category-div">
                                    <div>Guests :</div>
                                    <div>
                                        {booking.guests}
                                    </div>
                                </div>

                        </div>

                    </div>
                    { isExpand ?
                        <div className="dropdown" onClick={() => expand()}>

                            <ArrowCircleUpIcon></ArrowCircleUpIcon>

                        </div>

                        :
                        <div className="hover-dropdown" onClick={() => expand()}>

                          <ArrowDropDownCircleIcon></ArrowDropDownCircleIcon>

                        </div>

                    }
            </div>


    )
}

export default BookingExpand
