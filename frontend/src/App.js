import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import NavigationWhite from "./components/NavigationWhite";
import SpotsBrowser from "./components/SpotsBrowser";
import Welcome from "./components/Welcome"
import SpotsIdPage from "./components/SpotIdPage"
import BookingsPage from "./components/BookingsPage"
import SavesPage from "./components/SavesPage";



function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);


  return (
    <>
      <Route exact path="/">
      <Navigation isLoaded={isLoaded} />
        <Welcome />
        <SpotsBrowser />
      </Route>

      <Route exact path="/trips">
      <NavigationWhite isLoaded={isLoaded} />
        <BookingsPage />
      </Route>
      <Route exact path="/saves">
      <NavigationWhite isLoaded={isLoaded} />
        <SavesPage />
      </Route>
      <Route exact path="/spots/:spotId">
      <NavigationWhite isLoaded={isLoaded} />
        <SpotsIdPage />
      </Route>
      {isLoaded && (
        <Switch>
          <Route path="/login">
            <NavigationWhite isLoaded={isLoaded} />
            <LoginFormPage />
          </Route>
          <Route path="/signup">
          <NavigationWhite isLoaded={isLoaded} />
            <SignupFormPage />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
