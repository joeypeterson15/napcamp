import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);

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
      </>
    );
  }

  return (
    <nav className="nav-bar text">
      <div>
        <NavLink id="napcamp-text" className="nav-link" exact to="/">NapCamp</NavLink>
      </div>
      <div>
        <Link to="/trips" className="nav-link">Trips</Link>
        <Link to="/saves" className="nav-link">Saves</Link>
        <Link to="/inbox" className="nav-link">Inbox</Link>
        {isLoaded && sessionLinks}
      </div>
    </nav>
  );
}

export default Navigation;
