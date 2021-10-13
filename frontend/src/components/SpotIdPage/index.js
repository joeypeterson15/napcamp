import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getSpots } from '../../store/spots';
import { getReviews } from '../../store/reviews';
import { useEffect } from 'react';
import  Reviews  from '../Reviews/index.js'
import SpotCards from '../SpotCards';
import Bookings from '../Bookings';
import './SpotIdPage.css'

export default function SpotIdPage () {
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
        <>
            <div className="spot-detail-div">
                <img className="spot-detail-images" alt={spot?.id} src={spot?.imageUrl}></img>
                <img className="spot-detail-images" alt={spot?.id} src={spot?.imageUrl}></img>
                <img className="spot-detail-images" alt={spot?.id} src={spot?.imageUrl}></img>
            </div>
            <Bookings spotId={spot?.id}/>
            <div className="title-spot-page">
                <div className="text arrows-above-title">{`United States  >  California  >  Point Reyes`}</div>
                <div className="text" id="spot-name">{spot?.name}</div>
                <div className="text recommended"><span className="text hundred-percent">👍 %100</span> Recommended</div>
            </div>

            <div className="description-container">
                <span id="description" className="text" >Description</span>
                <span className="text" id="spot-description">{spot?.description}</span>
            </div>
            <SpotCards />
            <Reviews spotId={spot?.id} reviews={reviews.filter((review) => review?.spotId === spot?.id)}/>
            {/* <div id="map"></div>
            <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAB0C-dzmN7OKL0hJvjeSGOLxTcPySOAcM&callback=initMap&libraries=&v=weekly" async></script> */}
        </>
    );
}
