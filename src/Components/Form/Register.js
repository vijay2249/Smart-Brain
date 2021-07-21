import React, { useState } from 'react';
import {Label, Input, Hr, FlexCenter} from '../Styles/Styles';

const Register = ({toHome, userData, ChangeRoute}) =>{

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
    let {email, username, password, confirmPassword} = registerData;
    if(password === '' || confirmPassword === '' || username===''||email===''){alert('All fields are required');}
    else if((password === confirmPassword) && password !== ''){
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
    <div className='register'>
      <Label>UserName</Label>
      <Input name='username' type='text' onChange={handleChange} value={registerData.username} required/>
      <Label>Email</Label>
      <Input name='email' type='email' onChange={handleChange}  value={registerData.email} required/>
      <Label>Password</Label>
      <Input name='password' type='password' onChange={handleChange} value={registerData.password} required/>
      <Label>Confirm Password</Label>
      <Input name='confirmPassword' type='password' onChange={handleChange}  value={registerData.confirmPassword} required/>
      <Input onClick={handleSubmit} type='submit' value='Register' />
      <Hr />
      <FlexCenter>
        Already a member 
         <a href='#register' name='login' onClick={ChangeRoute}>Login</a>
      </FlexCenter>
    </div>
  );
}

export default Register;