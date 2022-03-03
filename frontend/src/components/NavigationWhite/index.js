import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import * as sessionActions from '../../store/session'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

// import { Dispatch } from 'react';
import { searchForLocations } from '../../store/spots';

import './NavigationWhite.css';





function NavigationWhite({ isLoaded, spotId }){

  let history = useHistory()

  const searchLocation = (e) => {
    e.preventDefault();
    setLocation('')
    dispatch(searchForLocations(location))
    history.push(`/search/${location.toLowerCase()}`)

}

  const isTrips = window.location.href.includes('trips') || window.location.href.includes('spots') || window.location.href.includes('search')

  const dispatch = useDispatch()
  const sessionUser = useSelector(state => state.session.user);
  const [credential, setCredential] = useState('')
  const [password, setPassword] = useState('')
  const [location, setLocation] = useState('')


  const demoLogin = async () => {
    setCredential("Demo-lition")
    setPassword("password")
    return dispatch(
      sessionActions.login({credential: "Demo-lition", password: "password"})
    )
  }



  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    );
  } else {
    sessionLinks = (
      <>
      <div className="right-nav">

        <NavLink id="nav-login" className="nav-link" to="/login">Login</NavLink>
        <NavLink id="nav-signup" className="nav-link" to="/signup">Signup</NavLink>
        <button id="demo-user-button" onClick={() => demoLogin()}>Demo</button>
      </div>
      </>
    );
  }



  return (
    <nav className="nav-bar-white text">
      <div>
        <NavLink id="napcamp-text" className="nav-link-login" exact to="/">NapCamp</NavLink>
      </div>
      {isTrips ?
      <div className="search-nav-div">
        <input className="search-input-nav"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        type="text"
        placeholder="Search a Location..."
        ></input>
        <button id="search-button-nav" onClick={(e) => searchLocation(e)}><div id="search-icon-nav-div"><i className="fas fa-search"></i></div></button>
      </div> : ""}
      <div className="right-nav">
        <Link to="/trips" className="nav-link trips-tag">Trips</Link>
        <Link to="/saves" className="nav-link">Saves</Link>
        {/* <Link to="/inbox" className="nav-link">Inbox</Link> */}
        {isLoaded && sessionLinks}
      </div>
    </nav>
  );
}

export default NavigationWhite;
