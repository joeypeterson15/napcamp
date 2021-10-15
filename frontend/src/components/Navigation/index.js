import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import * as sessionActions from '../../store/session'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import './Navigation.css';




function Navigation({ isLoaded }){

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
        <NavLink to="/login">Log In</NavLink>
        <NavLink to="/signup">Sign Up</NavLink>
        <button onClick={() => demoLogin()}></button>
      </>
    );
  }

  return (
    <nav className="nav-bar text">
      <div>
        <NavLink id="napcamp-text" className="nav-link" exact to="/">NapCamp</NavLink>
      </div>
      <div className="right-nav">
        <Link to="/trips" className="nav-link">Trips</Link>
        <Link id="nav-saves" to="/saves" className="nav-link">Saves</Link>
        <Link to="/inbox" className="nav-link">Inbox</Link>
        {isLoaded && sessionLinks}
      </div>
    </nav>
  );
}

export default Navigation;
