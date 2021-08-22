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
        <NavLink to="/login"><div className="homeClick">Log In</div></NavLink>
        <NavLink to="/signup"><div className="homeClick">Sign Up </div></NavLink>
      </>
    );
  }

  return (
        <div className="navDiv">
          <NavLink exact to="/"><div className="homeClick">Home </div> </NavLink>
          {id ? 
            <>
              <NavLink to={`/users/${id}`}>
              <div className="homeClick">
                Profile
                </div>
              </NavLink>
            </> 
            :
             <></>}
            <NavLink to={'/planets'}>
            <div className="homeClick">
              All Planets
              </div>
            </NavLink>
          {isLoaded && sessionLinks}
        </div>
  );
}

export default Navigation;