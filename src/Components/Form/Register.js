import React, { useState } from 'react';
import {Label, Input} from '../Styles/Styles';

const Register = ({toHome, userData}) =>{

  const [registerData, setRegisterData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword:''
  })

  const handleChange = (e) =>{
    let {name, value} = e.target;
    setRegisterData({...registerData, [name]:value});
  }

  let handleSubmit = () =>{
    let {password, confirmPassword} = registerData;
    if((password === confirmPassword) && password !== ''){
      fetch('http://localhost:443/register',{
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({registerData})
      })
      userData(registerData);
      toHome('home');  
    }
    else{
      alert('password and confirm password filed values must match');
    }
  }
  
  return(
    <div id="#Register" className='register'>
      <Label>UserName</Label>
      <Input name='username' type='text' placeholder='username' onChange={handleChange} value={registerData.username} required/>
      <Label>Email</Label>
      <Input name='email' type='email' placeholder='email' onChange={handleChange}  value={registerData.email}/>
      <Label>Password</Label>
      <Input name='password' type='password' placeholder='password' onChange={handleChange} value={registerData.password}/>
      <Label>Confirm Password</Label>
      <Input name='confirmPassword' type='password' placeholder='confirm password' onChange={handleChange}  value={registerData.confirmPassword}/>
      <Input onClick={handleSubmit} type='submit' value='Register' />
    </div>
  );
}

export default Register;