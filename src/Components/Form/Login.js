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