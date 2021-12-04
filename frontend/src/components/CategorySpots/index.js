import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import GoogleMap from '../GoogleMap';
import './CategorySpots.css'

function CategorySpots ({category, spots, currentSpot}) {


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
            {Object.values(categorySpots).length > 0 ? <h5 className="text">{`More ${category} listings`}</h5> : <div></div>}

                {Object.values(categorySpots).map((spot) => (
                    <div className="category-card">
                        <Link className="category-link text" to={`/spots/${spot.id}`}>
                                <img className="category-image" src={spot.imageUrl} alt={spot.id}></img>
                                <div className="category-name" key={spot.name}>{spot.name}</div>
                        </Link>
                    </div>
                ))}
            

        </div>
    );
}

export default CategorySpots;
