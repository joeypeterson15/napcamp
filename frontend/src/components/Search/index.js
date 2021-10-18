
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchForLocations } from '../../store/spots'
import './Search.css'

function Search () {

    const [location, setLocation] = useState('')

    const dispatch = useDispatch()

    const searchLocation = (e) => {

        e.preventDefault();

        // let locationArray = location.split(' ')
        // for (let i = 0; i < locationArray.length; i++) {
        //     let location = locationArray[i];
        //     location[0].toUpperCase()
        // }
        // locationArray.join(' ')

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
