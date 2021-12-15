
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getSaves } from '../../store/saves';
import { Link } from 'react-router-dom';


function SavesPage () {

    const dispatch = useDispatch();
    const user = useSelector((state) => state.session?.user);
    const spots = useSelector(state => Object.values(state.spots))

    const saves = useSelector(state => Object.values(state.saves))


    useEffect(() => {
        if (user){
            dispatch(getSaves(user?.id))
        }
    }, [dispatch, user?.id])

    return (
        <>
            <div className="saves-container">
                {saves.map(save => (
                    <div>
                        <Link to={`/spots/${save?.spotId}`}>
                            <img className="bookings-image" alt={save.id} src={spots.find((spot) => spot.id === save.spotId)?.imageUrl}></img>
                        </Link>
                    </div>
                ))}
            </div>
        </>
    )
}

export default SavesPage;
