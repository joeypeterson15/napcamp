import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import SpotsBrowser from "./components/SpotsBrowser";
import Welcome from "./components/Welcome"
import SpotsIdPage from "./components/SpotIdPage"
import BookingsPage from "./components/BookingsPage"

function App() {
  const dispatch = useDispatch();
  const[isGrey, setIsGrey] = useState(true)
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      <Route exact path="/">
        <Welcome />
        <SpotsBrowser />
      </Route>
      <Route exact path="/spots/:spotId">
        <SpotsIdPage />
      </Route>
      <Route exact path="/trips">
        <BookingsPage />
      </Route>
      {isLoaded && (
        <Switch>
          <Route path="/login">
            <LoginFormPage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
        </Switch>
      )}

    </>
  );
}

export default App;
