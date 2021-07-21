import React, { useState } from 'react';
import Login from './Login';
import Register from './Register';
import './Form.css';
import {NavBar, Link} from '../Styles/Styles';

export const Form = ({onRouteChange, updateUIuser}) =>{

  let [route, setRoute] = useState('login');

  let ChangeRoute = (event) =>{
    let {name} = event.target;
    setRoute(name);
  }

  let toHome = (event) =>{
    if(event === 'home')onRouteChange('home');
  }

  return(
    <div>
      <div className='Card'>
        <div className='wrapper'>
          <NavBar className='navBar'>
            <Link href='#login' name='login' onClick={ChangeRoute} className='SignIn'>SignIn</Link>
            <Link href='#register' name='register' onClick={ChangeRoute} className='SignUp'>SignUp</Link>
          </NavBar>
          {
            route==='login'
              ? <Login ChangeRoute={ChangeRoute} toHome={toHome} userData={updateUIuser}/>
              : <Register ChangeRoute={ChangeRoute} toHome={toHome} userData={updateUIuser}/>
          }
        </div>
      </div>
    </div>
  );
}