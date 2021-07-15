import React from 'react';
import {Label, Input, Hr} from '../Styles/Styles';

const Login = ({toHome}) =>{
  return(
    <div id='#login' className='login non_active'>
      <Label>Email</Label>
      <Input type='email' placeholder='email' />
      <Label>Password</Label>
      <Input type='password' placeholder='password' />
      <Input onClick={()=>toHome('home')} type='submit' value='SignIn' />
      <Hr/>
    </div>
  );
}

export default Login;