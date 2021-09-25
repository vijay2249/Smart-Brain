import React from 'react';

const Navigation = ({onRouteChange, isSignedIn}) =>{
	if(isSignedIn){
		return (
		<nav style={{display:'flex', justifyContent:'flex-end'}}>
			<p 
				onClick={() => onRouteChange('profile')} 
				className='f3 link dim black underline pa3 pointer' 
				style={{zindex:1, background:'none'}}
				> 
					Profile
			</p>
			<p 
				onClick={() => onRouteChange('login')} 
				className='f3 link dim black underline pa3 pointer' 
				style={{zindex:1, background:'none'}}
				> 
					Sign Out 
			</p>
		</nav>
		);
	}
	else{return (null);}
}

export default Navigation;