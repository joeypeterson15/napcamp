
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
import { getUserData } from '../../store/user';
import './BookingsPage.css'


export default function BookingsPage () {
    const dispatch = useDispatch();

    const [isModal, setIsModal] = useState(false)
    const [isExpand, setIsExpand] = useState(false)




    const isBackgroundGrey = false;

    const userId = useSelector((state) => state.session?.user?.id);
    const userName = useSelector((state) => state.session?.user?.username)
    const user = useSelector((state) => state?.user)

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
            dispatch(getUserData(userId))
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

            <div className="profile-container">
                <div className="pic-plus-username-container">
                    <div className="profile-pic-container">
                        <img className="profile-image" src={user?.profilePicture}></img>
                    </div>
                    <div className="profile-username">{user?.username}</div>
                </div>
                <div className="profile-container-body">
                    <div>{user?.bio !== null ? user?.bio : "say something about yourself"}</div>
                    {user?.memberSince &&
                    <div>Member Since: {new Intl.DateTimeFormat('en-US', { month: 'long' }).format(new Date(user?.memberSince))} {new Date(user?.memberSince).getDate() + 1}th, 2021</div>}
                    <div>Available Funds: ${user?.money}</div>
                </div>
            </div>
            <div className="bookings-container">
                {bookings.map((booking) => (
                    <BookingExpand booking={booking} spots={spots} />
                ))}
            </div>
        </div>

    )
}
