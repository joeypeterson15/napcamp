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
import SearchRes from "./components/SearchRes/SearchRes";



function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  const [isSearch, setIsSearch] = useState(false)
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);


  return (
    <div className="back">
      <Route exact path="/">
      <Navigation isLoaded={isLoaded} />
        <Welcome isSearch={isSearch} setIsSearch={setIsSearch}/>
        <SpotsBrowser isSearch={isSearch} setIsSearch={setIsSearch}/>
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
      <Route exact path="/search/:location">
      <NavigationWhite isLoaded={isLoaded} />
        <SearchRes />
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
    </div>
  );
}

export default App;
