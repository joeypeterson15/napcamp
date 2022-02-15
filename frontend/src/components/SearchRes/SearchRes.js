import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { useParams } from "react-router-dom"
import { useSelector } from "react-redux"
import { searchForLocations } from "../../store/spots"
import CustomMap from '../GoogleMap'
import './SearchRes.css'


function SearchRes () {
    let { location } = useParams()
    const spots = useSelector(state => state.spots.list)

    useEffect(() => {
        searchForLocations(location)
    }, [])

    return (
        <div className="background-white search-results-div">

            <div className="left-side-search-result-container">

                {spots.length ?
                    spots.map(spot => (
                        <Link to={`/spots/${spot.id}`} className="spots-div result-link text">
                            <img key={spot?.imageUrl} className="spots-result-img" alt={spot?.id} src={spot.imageUrl}></img>
                            <div key={spot?.name} className="text location">{spot.name}</div>
                            <div key={spot?.location} className="text category">{spot.location}</div>
                            <div key={spot?.category} className="text category">{spot.category}</div>
                            <div key={spot?.price} className="text category"><span className="bolder">{spot?.price}</span>/night</div>
                            <div className="border-bottom"></div>
                        </Link>
                    )) : "No Locations match your seach"}

            </div>

            <div className="search-results-map">
                <CustomMap spot={spots[0]}/>
            </div>
        </div>
    )
}

export default SearchRes
