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

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
      dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
      dispatch(getPlanets()); 
      dispatch(getUsers()); 
      dispatch(getSolarSystems());
  },[dispatch])

  const planetsSlice = useSelector(state => state.planets)
  const usersSlice = useSelector(state => state.users)
  const solarSystemsSlice = useSelector(state => state.solarSystems)

  const planets = Object.values(planetsSlice) // We are converting our slice of state(that is an object) into an Array.
  const users = Object.values(usersSlice)
  const solarSystems = Object.values(solarSystemsSlice)

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
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
            <Planet planets={planets} users={users} solarSystems={solarSystems}/>
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