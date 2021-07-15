import React from 'react';

const Rank = ({ displayUser, entries }) =>{
	let name = (displayUser) ? displayUser : 'Marshmello';
	let entry = (name === displayUser)? `your current entries are: ${entries}`: 'Login to see your entries';
	return (
		<div>
			<div className='white f3'>
				<i className='f1'>{`Hi ${name}`}</i>
			</div>
			<div className='white f2'>
				<i>{entry}</i>
			</div>
		</div>
	);
}

export default Rank;
