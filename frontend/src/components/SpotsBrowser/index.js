
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { getSpots } from '../../store/spots';
import './SpotsBrowser.css';


const SpotsBrowser = () => {
    const isBackgroundGrey = true;

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getSpots())
    }, [dispatch])

    // const spots = useSelector(state => {
    //     return state.spots?.list.map(spotsId => state.spots[spotsId]);
    // })
    const spots = useSelector(state => state.spots.list)

    if (!spots) {
        return null;
    }

    return (
        <div className={isBackgroundGrey ? 'background-grey' : 'background-white'}>
            <div className="spots-container">
                {spots.map((spot) => (
                    <Link to={`/spots/${spot.id}`} className="spots-div text">
                        <img key={spot?.imageUrl} className="spots-img" alt={spot?.id} src={spot.imageUrl}></img>
                        <div key={spot?.location} className="text location">{spot.location}</div>
                        <div key={spot?.category} className="text category">{spot.category}</div>
                    </Link>

                ))}
            </div>
        </div>
    )
}

export default SpotsBrowser;
