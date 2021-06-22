import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';
import brain from './brain-icon.png';

const Logo = () =>{
	return (
		<div className='ma4 mt0'>
			<Tilt className="Tilt br2 shadow-2" options={{max:30}} style={{height:200, width:200}}>
				<div className="Tilt-inner">
					<img src={brain} alt="Brain Logo" style={{ height:'200px', width:'200px' }} />
				</div>
			</Tilt>
		</div>
	);
}

export default Logo;
