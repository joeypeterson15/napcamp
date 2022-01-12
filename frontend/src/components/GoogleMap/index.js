import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';

import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './GoogleMap.css'


function CustomMap({ spot, google, locations = [] }) {

    const [location, setLocation] = useState('')
    // const [currentLocation, setCurrentLocation] = useState('')
    const dispatch = useDispatch();


    useEffect(()=> {
    fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${spot?.location},+CA&key=AIzaSyDcQHD-tKZVqVpv07vx0eE9lhueTMnbkyI`)
    .then(res => res.json())
    .then(json => setLocation(json?.results[0]))
    // .then(results => console.log('results', location?.geometry?.location))
    // .catch(e => console.log(e));


    return (setLocation(''))
    }, [dispatch])

    // useEffect(() => {
    //     if (navigator.geolocation) {
    //         navigator.geolocation.getCurrentPosition(
    //           (position) => {
    //             const pos = {
    //               lat: position.coords.latitude,
    //               lng: position.coords.longitude,
    //             };

    //             setCurrentLocation(pos)
    //             console.log('this is current location', pos)
    //           },
    //         );
    //       }
    // }, [dispatch])






    return (

        <Map
            google={google}
            containerStyle={{
                position: "static",
                width: "100%",
                height: "100%"
            }}
            style={{
                width: "100%",
                height: "100%"
            }}
            // center={locations[0]}
            center={{lat: spot?.lat, lng: spot?.lng}}
            initialCenter={{lat: spot?.lat, lng: spot?.lng}}
            zoom={locations.length === 1 ? 18 : 13}
            disableDefaultUI={true}
        >
            {locations.map(
                coords => <Marker position={coords} />
            )}

        </Map>
    );
};



// export default CustomMap;
export default GoogleApiWrapper({
  // apiKey: process.env.GOOGLE_API_KEY
  apiKey: "AIzaSyDcQHD-tKZVqVpv07vx0eE9lhueTMnbkyI"
})(CustomMap);
