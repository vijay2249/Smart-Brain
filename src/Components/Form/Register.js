import React from 'react';
import {Label, Input} from '../Styles/Styles';

const Register = ({toHome}) =>{

  return(
    <div id="#Register" className='register'>
      <Label>UserName</Label>
      <Input type='text' placeholder='username' required/>
      <Label>Email</Label>
      <Input type='email' placeholder='email' />
      <Label>Password</Label>
      <Input type='password' placeholder='password'/>
      <Label>Confirm Password</Label>
      <Input type='password' placeholder='confirm password' />
      <Input onClick={()=>toHome('home')} type='submit' value='Register' />
    </div>
  );
}

export default Register;