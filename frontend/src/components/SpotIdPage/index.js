import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getSpots } from '../../store/spots';
import { getReviews } from '../../store/reviews';
import { useEffect } from 'react';
import  Reviews  from '../Reviews/index.js'
import SpotCards from '../SpotCards';
import Bookings from '../Bookings';
import ImageModal from '../ImageModal'

import './SpotIdPage.css'

export default function SpotIdPage () {
    const isBackgroundGrey = false;

    const { spotId } = useParams()

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getSpots())
        dispatch(getReviews(spotId))
    }, [dispatch, spotId])


    const spot = useSelector(state => state.spots[spotId])
    const reviews = useSelector(state => Object.values(state.reviews))
    console.log(reviews)
    return (
        <div className={isBackgroundGrey ? 'background-grey' : 'background-white'}>
            <div className="spot-detail-div">
                <img className="spot-detail-images" alt={`${spot?.id}`} src={spot?.imageUrl}></img>
                <img className="spot-detail-2" alt={spot?.id} src={spot?.imageUrl}></img>
                <img className="spot-detail-3" alt={spot?.id} src={spot?.imageUrl}></img>
            </div>
            <ImageModal spot={spot}/>
            <Bookings spotId={spot?.id}/>
            <div className="title-spot-page">
                <div className="font arrows-above-title">{`United States  >  California  >  ${spot?.location}`}</div>
                <div id="spot-name" className="text">{spot?.name}</div>
                <div className="font recommended"><span className="text hundred-percent"><i class="fas fa-thumbs-up"></i> %100</span> Recommended</div>
            </div>

            <div className="description-container font">
                <span id="description" className="font">Description</span>
                <p className="font" id="spot-description">{spot?.description}</p>
            </div>
            <SpotCards />
            <Reviews spot={spot} spotId={spot?.id} reviews={reviews.filter((review) => review?.spotId === spot?.id)}/>

        </div>
    );
}
