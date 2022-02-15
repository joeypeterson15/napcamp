import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import * as sessionActions from '../../store/session'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import './NavigationWhite.css';





function NavigationWhite({ isLoaded, spotId }){

  console.log('hellllo', spotId)

  const dispatch = useDispatch()
  const sessionUser = useSelector(state => state.session.user);
  const [credential, setCredential] = useState('')
  const [password, setPassword] = useState('')

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
