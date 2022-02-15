import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { useSelector } from "react-redux"
import { searchForLocations } from "../../store/spots"


function SearchRes () {
    let { location } = useParams()
    const spots = useSelector(state => state.spots.list)

    useEffect(() => {
        searchForLocations(location)
    }, [])

    return (
        <>
            {spots.length ?
                spots.map(spot => (
                    <div>{spot?.location}</div>
                )) : "No Locations match your seach"}
        </>
    )
}

export default SearchRes
