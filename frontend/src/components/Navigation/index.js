import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';

function Navigation({ isLoaded, planets}){
  const sessionUser = useSelector(state => state.session.user);
  const session = useSelector(state => state.session);

  const id = session.user ? session.user.id : ''

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <>
      <ProfileButton user={sessionUser} />
      </>
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
        <div>
          <NavLink exact to="/"> Home </NavLink>
          <NavLink exact to= '/planets'> Planets </NavLink>
          {id ? 
            <>
              <NavLink to={`/users/${id}`}>
                Profile
              </NavLink>
            </> 
            :
             <></>}
            <NavLink to={'/planets'}>
              All Planets
            </NavLink>
          {isLoaded && sessionLinks}
        </div>
  );
}

export default Navigation;