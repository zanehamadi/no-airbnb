import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import Planets from "./components/Planets"
import Planet from "./components/Planet";
import { getPlanets } from "./store/planets"
import { getUsers } from "./store/users"
import { getSolarSystems } from "./store/solarSystems"
import {getReviews} from "./store/reviews"
import Home from "./components/Home";
import Search from "./components/Search";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
      dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
      dispatch(getPlanets()); 
      dispatch(getUsers()); 
      dispatch(getSolarSystems());
      dispatch(getReviews());
  },[dispatch])

  const planetsSlice = useSelector(state => state.planets)
  const usersSlice = useSelector(state => state.users)
  const solarSystemsSlice = useSelector(state => state.solarSystems)
  const reviewsSlice = useSelector(state => state.reviews)

  const planets = Object.values(planetsSlice) // We are converting our slice of state(that is an object) into an Array.
  const users = Object.values(usersSlice)
  const solarSystems = Object.values(solarSystemsSlice)
  const reviews = Object.values(reviewsSlice)

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      <Search solarSystems={solarSystems} planets={planets}/>
      {isLoaded && (
        <Switch>
          <Route exact path='/'>
            <Home/>
          </Route>
          <Route path="/login">
            <LoginFormPage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route exact path="/planets">
            <Planets planets={planets}/>
          </Route>
          <Route path='/planets/:id'>
            <Planet planets={planets} users={users} solarSystems={solarSystems} reviews={reviews}/>
          </Route>
          <Route>
            404 Not Found
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;