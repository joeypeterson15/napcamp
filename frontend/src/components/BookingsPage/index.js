
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
import { updateMyBio } from '../../store/user';
import './BookingsPage.css'


export default function BookingsPage () {
    const dispatch = useDispatch();

    const [isModal, setIsModal] = useState(false)
    const [isExpand, setIsExpand] = useState(false)
    const [showModal, setShowModal] = useState(false)
    const [bio, setBio] = useState("")
    const isBackgroundGrey = false;

    const userId = useSelector((state) => state.session?.user?.id);
    const userName = useSelector((state) => state.session?.user?.username)
    const user = useSelector((state) => state?.user)

    useEffect(() => {
        if (userId){
            dispatch(getBookings(userId))
            dispatch(getUserData(userId))
        }
        dispatch(getSpots())
    }, [dispatch, userId])




    const convertTime = function(oldTime){
        var time = oldTime.split(':');
        var hours = time[0];
        var minutes = time[1];
        let timeValue = "" + ((hours >12) ? hours - 12 === 0 ? 12 : hours-12 :hours == 0 ? 12 : hours);
            timeValue += (minutes < 10) ? ':' + minutes : ":" + minutes;
            timeValue += (hours >= 12) ? " pm" : " am";
            return timeValue;
        }
    const updateBio = function(){
        // e.preventDefault()
        const payload = {
            'bio': bio
        }
        dispatch(updateMyBio(user?.id, payload))
        setShowModal(false)
        // dispatch(getUserData(user?.id))
    }




    const bookings = useSelector(state => Object.values(state.bookings))
    const spots = useSelector(state => Object.values(state.spots))

    // const expand = () => {
    //     !isExpand ? setIsExpand(true) : setIsExpand(false)
    // }

    return (
        <div className={isBackgroundGrey ? 'background-grey' : 'background-white'}>
            <div className="userName-bookings text">{userName}'s Trips:</div>
            <div className="div-line-trips"></div>

            <div className="containers profile-container">
                <div className="pic-plus-username-container">
                    <div className="profile-pic-container">
                        <img className="profile-image" src={user?.profilePicture}></img>
                    </div>
                    <div className="profile-username">{user?.username}</div>
                </div>
                <div className="profile-container-body">
                    <div>{<span id="bold-intro">Intro:</span>}{user?.bio !== null ? user?.bio : "Introduce yourself to the community!"}</div>
                    {user?.memberSince &&
                    <div>Member since: {new Intl.DateTimeFormat('en-US', { month: 'long' }).format(new Date(user?.memberSince))} 2022</div>}
                    <div onClick={() => setShowModal(true)} className="edit-profile-click">Edit profile</div>
                </div>
            </div>
            <div className="containers cash-container">
                <div className="balance-div">
                    <span id="balance-circle">${user?.money}</span>
                    <span id="word-is-balance">

                        Balance
                    </span>
                </div>
            </div>

            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <div className="edit-bio-modal">
                        <textarea value={bio} onChange={(e) => setBio(e.target.value)} placeholder={user?.bio !== null ? user?.bio : "Introduce yourself to the napcamp community"}></textarea>
                    </div>
                    <button onClick={updateBio}>Save</button>
                </Modal>
            )}




            <div className="bookings-container">
                {bookings.map((booking) => (
                    <BookingExpand booking={booking} spots={spots} />
                ))}
            </div>
        </div>

    )
}
