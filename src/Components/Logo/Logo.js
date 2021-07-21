import React from 'react';
import Tilt from 'react-tilt';
import Brain from './SmartBrainFrontend.png';

const styles = {
	height: 200,
	width: 200,
	background: 'linear-gradient(89deg, #FF5EDF 0%, #04C8DE 100%)'
};

const Logo = () =>{
	return (
		<div className='ma4 mt0'>
			<Tilt className="Tilt br2 shadow-2" options={{max:30}} style={styles}>
				<div className="Tilt-inner">
					<img src={Brain} alt="Brain Logo" style={{ height:'200px', width:'200px' }} />
				</div>
			</Tilt>
		</div>
	);
}

export default Logo;
