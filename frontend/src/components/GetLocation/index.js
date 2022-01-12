import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import './GetLocation.css'

function GetLocation ({spot}) {
    //  const [location, setLocation] = useState('')
     const [currentLocation, setCurrentLocation] = useState('')
     const dispatch = useDispatch();




     useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
              (position) => {
                const pos = {
                  lat: position.coords.latitude,
                  lng: position.coords.longitude,
                };

                setCurrentLocation(pos)
                // console.log('this is current location', pos)
              },
            );
          }
    }, [dispatch])


     const rad = function(x) {
        return x * Math.PI / 180;
      };

     const distanceBetween = (currentLocation) => {
        // console.log('Distance between input location', location)
        var R = 6378137; // Earth’s mean radius in meter
        var dLat = rad(currentLocation?.lat - spot?.lat);
        var dLong = rad(currentLocation?.lng - spot?.lng);
        var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
          Math.cos(rad(spot?.lat)) * Math.cos(rad(currentLocation?.lat)) *
          Math.sin(dLong / 2) * Math.sin(dLong / 2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        var d = Math.floor(R * c * 0.00062);
        return d=== 0 ? "Less than a mile" : d + " miles away"; // returns the distance in miles
      };
    //  const distanceBetween = (currentLocation, location) => {
    //     console.log('Distance between input location', location)
    //     var R = 6378137; // Earth’s mean radius in meter
    //     var dLat = rad(currentLocation?.lat - location?.geometry?.location?.lat);
    //     var dLong = rad(currentLocation?.lng - location?.geometry?.location?.lng);
    //     var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    //       Math.cos(rad(location?.geometry?.location?.lat)) * Math.cos(rad(currentLocation?.lat)) *
    //       Math.sin(dLong / 2) * Math.sin(dLong / 2);
    //     var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    //     var d = R * c;
    //     return Math.floor(d * 0.00062); // returns the distance in meter
    //   };

     return (

            <div className="get-distance-div">{distanceBetween(currentLocation)}</div>

     )
}

export default GetLocation;
