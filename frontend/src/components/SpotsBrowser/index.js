import { useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink, Link, Route, useParams } from 'react-router-dom';


import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { getSpots } from '../../store/spots';
import './SpotsBrowser.css';


const SpotsBrowser = () => {
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
        <>
            <div className="spots-container">
                {spots.map((spot) => (
                    <Link to={`/spots/${spot.id}`} className="spots-div">
                        <img className="spots-img"alt={spot?.id} src={spot.imageUrl}></img>
                        <div className="text category">{spot.category}</div>
                        <div className="text location">{spot.location}</div>
                    </Link>

                ))}
            </div>
        </>
    )
}

export default SpotsBrowser;
