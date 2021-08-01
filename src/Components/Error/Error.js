import React from 'react';

// Imported by Form/Login.js
// 1. Incorrect login details
export const IncorrectLoginDetails = () =>{
  return(
    <h4 style={{margin: '0', marginBottom:'4px'}}>
      Enter correct credentials
    </h4>
  );
}

// Imported by Form/Register.js
// 3. password and confirm password fields text matching
export const PasswordFieldsTextMatch = () =>{
  return(
    <h4 style={{margin:'0'}}>Password Fields values must match</h4>
  );
}


// Imported by App.js in onInputChange function
// 4. image url that do not contain human faces
export const NonHumanFaces = () =>{
  return(
    <h3>Please enter image url that contains human faces</h3>
  );
}

/*
POSSIBLE ERRORS:

// Imported by Form/Register.js
2. Not a strong Password - backend not yet created

*/