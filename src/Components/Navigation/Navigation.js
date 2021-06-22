import React from 'react';
import './Navigation.css';

const Navigation = ({onRouteChange, isSignedIn}) =>{
	if(isSignedIn){
		return (
		<nav style={{display:'flex', justifyContent:'flex-end'}}>
			<p onClick={() => onRouteChange('signin')} className='f3 link dim black underline pa3 pointer' style={{zindex:10, background:'none'}}> Sign Out </p>
		</nav>
		);
	}
	else{
			return (
				<nav style={{display:'flex', justifyContent:'flex-end'}}>
					<p onClick={() => onRouteChange('signin')} className='f3 link dim black underline pa3 pointer' style={{zindex:10, background:'none'}}> Sign In </p>
					<p onClick={() => onRouteChange('register')} className='f3 link dim black underline pa3 pointer' style={{zindex:10, background:'none'}}> Register </p>
				</nav>
			);
		}
}

export default Navigation;