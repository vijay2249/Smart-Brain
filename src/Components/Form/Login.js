import React, { useState } from 'react';
import {Label, Input, Hr} from '../Styles/Styles';

const Login = ({toHome, userData}) =>{

  let [signInData, setSignInData] = useState({
    email:'',
    password: '',
    username:''
  })

  let handleChange = (e) =>{
    const {name, value} = e.target;
    setSignInData({...signInData, [name]:value});
  }

  const handleSubmit = () =>{
    signInData.username = signInData.email.split('@')[0];
    userData(signInData);
    toHome('home');
  }

  return(
    <div id='#login' className='login non_active'>
      <Label>Email</Label>
      <Input type='email' placeholder='email' onChange={handleChange} name='email' value={signInData.email}/>
      <Label>Password</Label>
      <Input type='password' placeholder='password'onChange={handleChange} name='password' value={signInData.password}/>
      <Input onClick={handleSubmit} type='submit' value='SignIn' />
      <Hr/>
    </div>
  );
}

export default Login;