import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getSpots } from '../../store/spots';
import { getReviews } from '../../store/reviews';
import { useEffect, useState} from 'react';
import  Reviews  from '../Reviews/index.js'
import SpotCards from '../SpotCards';
import Bookings from '../Bookings';
import ImageModal from '../ImageModal'
import { getSaves, createSave } from '../../store/saves';
import { getUserData } from '../../store/user';


import './SpotIdPage.css'

export default function SpotIdPage () {
    const isBackgroundGrey = false;

    const { spotId } = useParams()

    const dispatch = useDispatch()
    const spots = useSelector(state => state?.spots)
    const spot = useSelector(state => state.spots[spotId])
    const reviews = useSelector(state => Object.values(state.reviews))
    const saves = useSelector(state => Object.values(state.saves))
    const user = useSelector(state => state.user)
    const userId = useSelector((state) => state.session?.user?.id);

    const [isSaved, setIsSaved] = useState(false)

    useEffect(() => {
        dispatch(getSaves(userId))
        dispatch(getUserData(userId))
    }, [userId])

    useEffect(() => {
        dispatch(getSpots())
        dispatch(getReviews(spotId))
        // dispatch(getSaves(userId))
        window.scrollTo(0, 0);
    }, [dispatch, spotId])

    useEffect(() => {
        if (saves) {
            for (let i = 0; i < saves.length; i++) {
                let save = saves[i];
                // console.log('save', save)
                if (save.spotId == spotId) {
                    setIsSaved(true)
                    return
                }
            }
        }

        return (setIsSaved(false))
    }, [dispatch, spotId])



    function saveSpot () {
        const payload = {
            spotId,
            userId
        }

        dispatch(createSave(payload, spotId, userId))
        setIsSaved(true)
    }


    return (
        <div className={isBackgroundGrey ? 'background-grey' : 'background-white'}>
            <div className="spot-detail-div">
                <img className="spot-detail-images" alt={`${spot?.id}`} src={spot?.imageUrl}></img>
                <img className="spot-detail-2" alt={spot?.id} src={spot?.imageUrl}></img>
                <img className="spot-detail-3" alt={spot?.id} src={spot?.imageUrl}></img>
            </div>
            <ImageModal spot={spot}/>
            <Bookings spot={spot} spotId={spot?.id} currentSpot={spot} category={spot?.category} spots={spots} user={user}/>
            <div className="title-spot-page">
                <div className="font arrows-above-title">{`United States  >  California  >  ${spot?.location}`}</div>
                <div id="spot-name" className="text">{spot?.name}</div>
                <div className="save-and-recommended-div">
                    <div className="font recommended"><span className="text hundred-percent"><i class="fas fa-thumbs-up"></i> %100</span> Recommended</div>
                    <div>
                        { isSaved ?
                        <button id="save-button">Saved</button>
                        :
                        <button onClick={saveSpot} id="save-button">Save to list</button>}

                    </div>
                </div>
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
