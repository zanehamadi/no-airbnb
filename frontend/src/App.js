import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import Planets from "./components/Planets"
import Planet from "./components/Planet";
import Home from "./components/Home";
import Search from "./components/Search";
import User from "./components/User";
import { getPlanets } from "./store/planets"
import { getUsers } from "./store/users"
import { getSolarSystems } from "./store/solarSystems"
import {getReviews} from "./store/reviews"
import { getBookings } from "./store/bookings";
import Footer from "./components/Footer";


function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  const user = useSelector(state => state.session.user)

  useEffect(() =>  {
      dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
      dispatch(getPlanets()); 
      dispatch(getUsers()); 
      dispatch(getSolarSystems());
      dispatch(getReviews());
      dispatch(getBookings())
  },[dispatch])

  const planetsSlice = useSelector(state => state.planets)
  const usersSlice = useSelector(state => state.users)
  const solarSystemsSlice = useSelector(state => state.solarSystems)
  const reviewsSlice = useSelector(state => state.reviews)
  const bookingSlice = useSelector(state => state.bookings)



  const planets = Object.values(planetsSlice) // We are converting our slice of state(that is an object) into an Array.
  const users = Object.values(usersSlice)
  const solarSystems = Object.values(solarSystemsSlice)
  const reviews = Object.values(reviewsSlice)
  const bookings = Object.values(bookingSlice)



  return (
    <>
      <Navigation isLoaded={isLoaded} users={users}/>
      {isLoaded && (
        <>
          <Switch>
            <Route exact path='/'>
              <Home/>
              <Search solarSystems={solarSystems} planets={planets} bookings={bookings}/>
            </Route>
            <Route exact path={`/users/:id`}>
              <User user={user} planets={planets} bookings={bookings} reviews={reviews}/> 
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
              <Planet planets={planets} users={users} solarSystems={solarSystems} reviews={reviews} bookings={bookings}/>
            </Route>
            <Route>
              404 Not Found
            </Route>
          </Switch>
        <Footer/>
      </>
      )}
    </>
  );
}

export default App;