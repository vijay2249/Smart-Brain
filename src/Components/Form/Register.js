import React, { useState } from 'react';
import {Label, Input, Hr, FlexCenter} from '../Styles/Styles';
import {PasswordFieldsTextMatch, UserAlreadyExists,NotStrongPassword} from '../Error/Error';

const Register = ({toHome, userData, ChangeRoute}) =>{

  let strongPassword = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})')
  const [isStrongPassword, setIsStrongPassword] = useState(true)
  const [valuesMatched, setValuesMatched] = useState(true)
  const [newUser, setNewUser] = useState(true)
  const [registerData, setRegisterData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword:''
  })

  const handleChange = (e) =>{
    let {name, value} = e.target;
    setRegisterData({...registerData, [name]:value});
    if(newUser === false) setNewUser(true)
    if(isStrongPassword === false) setIsStrongPassword(true)
    if(valuesMatched === false) setValuesMatched(true)
  }

  let handleSubmit = () =>{
    let {email, username, password, confirmPassword} = registerData;
    if(password === '' || confirmPassword === '' || username===''||email===''){
      alert('All fields are required');
    }
    else if(password === confirmPassword){
      if(strongPassword.test(password)){
        fetch('https://secure-fjord-78328.herokuapp.com/register',{
          method: 'post',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({registerData})
        })
          .then(res => res.json())
          .then(data =>{
            if(data !== "error"){
              userData(data)
              toHome('home')
            }
            else{setNewUser(false)}
          })
      }
      else{
        setIsStrongPassword(false)
      }
    }
    else{
      setValuesMatched(false);
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
      {!valuesMatched && <PasswordFieldsTextMatch/>}
      {!newUser && <UserAlreadyExists/>}
      {!isStrongPassword && <NotStrongPassword/>}
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