import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';
import { login } from '../../store/session';
import * as sessionActions from '../../store/session';



function Navigation({ isLoaded, planets}){
  const sessionUser = useSelector(state => state.session.user);
  const session = useSelector(state => state.session);
  const id = session.user ? session.user.id : ''
  const dispatch = useDispatch()

  const demoButtonFunction = () => {
    const credential = 'starman'
    const password = 'password'
    return dispatch(sessionActions.login({credential, password}))
  }


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
        <span onClick={demoButtonFunction}>Demo</span>
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