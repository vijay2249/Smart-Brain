import React from 'react';
import styled from 'styled-components';
const H4 = styled.h4`
  margin: 0;
  margin-bottom: 5px;
  // color: rgba(255,0,0,0.7);
`;

// Imported by Form/Login.js
// 1. Incorrect login details
export const IncorrectLoginDetails = () =>{
  return(
    <H4>Enter correct credentials</H4>
  );
}

// Imported by Form/Register.js
// 3. password and confirm password fields text matching
export const PasswordFieldsTextMatch = () =>{
  return(
    <H4>Password Fields values must match</H4>
  );
}


// Imported by App.js in onInputChange function
// 4. image url that do not contain human faces
export const NonHumanFaces = () =>{
  return(
    <H4>Please enter image url that contains human faces</H4>
  );
}

// Imported by Form/Register.js
// 5. User already exists while registration
export const UserAlreadyExists = () =>{
  return(
    <H4>User Already exists with these credentials, enter new credentials to register</H4>
  );
}

/*
POSSIBLE ERRORS:

// Imported by Form/Register.js
2. Not a strong Password - backend not yet created

*/