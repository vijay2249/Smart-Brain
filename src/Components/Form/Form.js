import React, { useState } from 'react';
import Login from './Login';
import Register from './Register';
import './Form.css';

export const Form = ({onRouteChange}) =>{

  let [route, setRoute] = useState('register');

  let handleClick = (event) =>{
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
          <div className='navBar'>
            <a href='#login' name='login' onClick={handleClick} className='SignIn'>SignIn</a>
            <a href='#register' name='register' onClick={handleClick} className='SignUp'>SignUp</a>
          </div>
          {route==='login'? <Login toHome={toHome}/>:<Register toHome={toHome}/>}
        </div>
      </div>
    </div>
  );
}