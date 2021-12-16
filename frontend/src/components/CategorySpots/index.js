import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import GetLocation from '../GetLocation';

import GoogleMap from '../GoogleMap';
import './CategorySpots.css'

function CategorySpots ({category, spots, currentSpot, propSpot}) {

    const dispatch = useDispatch();



    const [categorySpots, setCategorySpots] = useState({})


    useEffect(() => {

        let newSpots = {}
        const arraySpots = Object.values(spots);
        for (let i = 0; i<arraySpots.length; i++) {
            let spot = arraySpots[i]
            if (spot.category === category && spot?.id !== currentSpot?.id) {
                newSpots[i] = spot
            }
        }
        setCategorySpots(newSpots)
    }, [spots])








    return (
        <div className="category-cards-container">
            {Object.values(categorySpots).length > 0 ? <h5 className="text">{`More ${category} listings near you`}</h5> : <div></div>}

                {Object.values(categorySpots).map((spot) => (
                    <Link className="category-link text" to={`/spots/${spot.id}`}>
                            <div className="category-card">
                                <img className="category-image" src={spot.imageUrl} alt={spot.id}></img>
                                <div>
                                    <div className="category-name" key={spot.name}>{spot.name}</div>
                                    <GetLocation spot={spot}/>

                                </div>
                    </div>
                        </Link>
                ))}


        </div>
    );
}

export default CategorySpots;
