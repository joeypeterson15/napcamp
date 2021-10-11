import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getSpots } from '../../store/spots';
import { getReviews } from '../../store/reviews';
import { useEffect } from 'react';
import  Reviews  from '../Reviews/index.js'
import SpotCards from '../SpotCards';
import './SpotIdPage.css'

export default function SpotIdPage () {
    const { spotId } = useParams()

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getSpots())
        dispatch(getReviews(spotId))
    }, [dispatch])


    const spot = useSelector(state => state.spots[spotId])
    const reviews = useSelector(state => Object.values(state.reviews))
    return (
        <>
            <div className="spot-detail-div">
                <img className="spot-detail-images" alt={spot?.id} src={spot?.imageUrl}></img>
                <img className="spot-detail-images" alt={spot?.id} src={spot?.imageUrl}></img>
                <img className="spot-detail-images" alt={spot?.id} src={spot?.imageUrl}></img>
            </div>
            <div class="text" id="spot-name">{spot?.name}</div>
            <div className="description-container">
                <span className="text" >Description</span>
                <span id="spot-description">{spot?.description}</span>
            </div>
            <SpotCards />
            <Reviews spotId={spot?.id} reviews={reviews}/>
        </>
    );
}
