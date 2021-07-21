import React, { useState } from 'react';
import {Label, Input, Hr, FlexCenter, Backup} from '../Styles/Styles';

const Login = ({toHome, userData, ChangeRoute}) =>{

  let [signInData, setSignInData] = useState({
    email:'',
    password: '',
    username:''
  })

  let handleChange = (e) =>{
    const {name, value} = e.target;
    setSignInData({...signInData, [name]:value});
  }

  const handleSubmit = (event) =>{
    let {email, password} = signInData;
    if(email === '' || password === ''){
      alert('Please enter details')
    }
    else{
      signInData.username = email.split('@')[0];
      // fetch('http://localhost:443/signin',{
        // method:'post',
        // headers:{'Content-Type':'application/json'},
        // body: JSON.stringify({signInData})
      // })
        // .then(response => response.json())
        // .then(data =>{
          // if(data !== 'error'){
            userData(signInData);
            toHome('home');
          // }
          // else alert('enter correct login details');
        // })
    }
    event.preventDefault();
  }

  return(
    <div className='login'>
      <Label>Email</Label>
      <Input type='email' onChange={handleChange} name='email' value={signInData.email} required/>
      <Label>Password</Label>
      <Input type='password' onChange={handleChange} name='password' value={signInData.password} required/>
      <Input onClick={handleSubmit} type='submit' value='SignIn' />
      <Hr/>
      <FlexCenter>
        <Backup>Forgot Password </Backup>
        <Backup name='register' onClick={ChangeRoute}>SignUp</Backup>
      </FlexCenter>
    </div>
  );
}

export default Login;