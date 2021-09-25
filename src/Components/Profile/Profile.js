import React from 'react'

export default function Profile(){
  return(
    <div>
      <nav style={{display:'flex', justifyContent:'flex-end'}}>
        <p 
          onClick={() => onRouteChange('home')} 
          className='f3 link dim black underline pa3 pointer' 
          style={{zindex:1, background:'none'}}
          > 
            Home
        </p>
      </nav>
    </div>
  );
}