
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchForLocations } from '../../store/spots'
import './Search.css'

function Search () {

    const [location, setLocation] = useState('')

    const dispatch = useDispatch()

    const searchLocation = (e) => {

        e.preventDefault();

        setLocation('')
        dispatch(searchForLocations(location))

    }

    return(
        <div className="search-location">
            <form className="search-form" onSubmit={searchLocation}>
                <div id="where-to">WHERE TO?</div>
                <input id="search-text" value={location} onChange={(e) => setLocation(e.target.value)} type="text" placeholder="Search a Location..."></input>
                <button id="search-button" type="submit" ><div id="search-icon-div"><i className="fas fa-search"></i></div></button>
            </form>
        </div>
    )
}

export default Search
