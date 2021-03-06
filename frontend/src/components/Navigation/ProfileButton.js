import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';
import "./Navigation.css"

function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
    // const background = document.createElement("div")
    // background.setAttribute('id', "mask-white")
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
      // let background = document.getElementById('mask-white')
      // background.removeElement()
    };

    document.addEventListener('click', closeMenu);

    return () => {
      document.removeEventListener("click", closeMenu)

            };
  }, [showMenu]);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
  };

  return (
    <>

        <img onClick={openMenu} className="review-icon-nav" src="https://i.ibb.co/xL7Nt98/hipcamp-icon.png" alt="hipcamp-icon" ></img>
      {showMenu && (
        <div className="profile-dropdown">
          {/* <div>{user.username}</div>
          <div>{user.email}</div> */}
          <div>
            <button className="logout-button" onClick={logout}>Log Out</button>
          </div>
        </div>
      )}
    </>
  );
}

export default ProfileButton;
