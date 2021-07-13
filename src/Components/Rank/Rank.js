import React from 'react';

const Rank = ({ displayUser, entries }) =>{
	let name = (displayUser) ? displayUser:'Marshmello';
	let entry = (name === displayUser)? entries: 'Login to see your entries';
	return (
		<div>
			<div className='white f3'>
				<i>{`Hi ${name}, your current entries are...`}</i>
			</div>
			<div className='white f1'>
				<i>{entry}</i>
			</div>
		</div>
	);
}

export default Rank;
