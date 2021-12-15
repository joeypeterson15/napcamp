import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import GoogleMap from '../GoogleMap';
import './CategorySpots.css'

function CategorySpots ({category, spots, currentSpot, spot}) {

    const dispatch = useDispatch();



    const [categorySpots, setCategorySpots] = useState({})
    // const [location, setLocation] = useState('')
    const [currentLocation, setCurrentLocation] = useState('')

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



    const getLocation = (spot) => {
        fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${spot?.location},+CA&key=AIzaSyDcQHD-tKZVqVpv07vx0eE9lhueTMnbkyI`)
        .then(res => res.json())
        .then(results => results?.results[0])
        .then((location) => {
            console.log('Distance between input location', location)
            var R = 6378137; // Earth’s mean radius in meter
            var dLat = rad(currentLocation?.lat - location?.geometry?.location?.lat);
            var dLong = rad(currentLocation?.lng - location?.geometry?.location?.lng);
            var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
              Math.cos(rad(location?.geometry?.location?.lat)) * Math.cos(rad(currentLocation?.lat)) *
              Math.sin(dLong / 2) * Math.sin(dLong / 2);
            var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
            var d = R * c;
            console.log('d for distance', d)
            return d; // returns the distance in meter
        })
        .catch(e => console.log(e));
        }



        useEffect(() => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                  (position) => {
                    const pos = {
                      lat: position.coords.latitude,
                      lng: position.coords.longitude,
                    };

                    setCurrentLocation(pos)
                    console.log('this is current location', pos)
                  },
                );
              }
        }, [dispatch])





        console.log('get distance function', getLocation(spot))



    const rad = function(x) {
        return x * Math.PI / 180;
      };

    const distanceBetween = (location) => {
        console.log('Distance between input location', location)
        var R = 6378137; // Earth’s mean radius in meter
        var dLat = rad(currentLocation?.lat - location?.geometry?.location?.lat);
        var dLong = rad(currentLocation?.lng - location?.geometry?.location?.lng);
        var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
          Math.cos(rad(location?.geometry?.location?.lat)) * Math.cos(rad(currentLocation?.lat)) *
          Math.sin(dLong / 2) * Math.sin(dLong / 2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        var d = R * c;
        return d; // returns the distance in meter
      };


    return (
        <div className="category-cards-container">
            {Object.values(categorySpots).length > 0 ? <h5 className="text">{`More ${category} listings`}</h5> : <div></div>}

                {Object.values(categorySpots).map((spot) => (
                    <div className="category-card">
                        <Link className="category-link text" to={`/spots/${spot.id}`}>
                                <img className="category-image" src={spot.imageUrl} alt={spot.id}></img>
                                <div className="category-name" key={spot.name}>{spot.name}</div>
                                <div>{getLocation(spot)}</div>
                        </Link>
                    </div>
                ))}


        </div>
    );
}

export default CategorySpots;
