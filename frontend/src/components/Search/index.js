
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchForLocations } from '../../store/spots'
import { useHistory } from 'react-router-dom';
import './Search.css'

function Search () {
    let history = useHistory()
    const [location, setLocation] = useState('')

    const dispatch = useDispatch()

    const searchLocation = (e) => {
        e.preventDefault();
        setLocation('')
        dispatch(searchForLocations(location))
        history.push(`/search/${location.toLowerCase()}`)

    }

    return(
        <div className="search-location">
            <form className="search-form" onSubmit={searchLocation}>
                <div>
                    <div className="where-to">WHERE TO?</div>
                    <input className="search-text" value={location} onChange={(e) => setLocation(e.target.value)} type="text" placeholder="Search a Location..."></input>
                </div>
                <div>
                    <div className="where-to">DATES</div>
                    <input className="search-text date-style" type="date" placeholder="Enter date"
                    ></input>
                </div>
                <div>
                    <div className="where-to">GUESTS</div>
                    <select name="guests" className="search-text">
                        <option>Guests</option>
                        <option type="click" className="text bookings-guests">1</option>
                        <option type="click" className="text bookings-guests">2</option>
                    </select>
                </div>
                    <button id="search-button" type="submit" ><div id="search-icon-div"><i className="fas fa-search"></i></div></button>
            </form>
        </div>
    )
}

export default Search
