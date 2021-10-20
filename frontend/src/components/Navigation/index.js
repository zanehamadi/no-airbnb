import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';
import * as sessionActions from '../../store/session';



function Navigation({ isLoaded, planets}){
  const sessionUser = useSelector(state => state.session.user);
  const session = useSelector(state => state.session);
  const id = session.user ? session.user.id : ''
  const dispatch = useDispatch()
  const history = useHistory()

  const demoButtonFunction = () => {
    const credential = 'starman'
    const password = 'password'
    return dispatch(sessionActions.login({credential, password}))
  }

  const homeImgFunc = () => {
    history.push('/')
  }

  return (
    <nav className="navDiv">
        <div className="nav-links-div">
          <img src="https://i.imgur.com/GJ2lBHG.gif" id="logoImg" onClick={homeImgFunc}/>
          <NavLink to={'/planets'} className="homeClick">
              All Planets
          </NavLink>
        </div>
        <div className="nav-auth">
          {id ? 
            <>
              <ProfileButton user={sessionUser}/>
            </>

            :
        
            <>
              <NavLink to="/login"><div className="homeClick">Log In</div></NavLink>
              <NavLink to="/signup"><div className="homeClick">Sign Up </div></NavLink>
              <span onClick={demoButtonFunction} id="demoButton" className="homeClick">Demo</span>
            </>        
        }
        </div>
    </nav>
  );
}

export default Navigation;