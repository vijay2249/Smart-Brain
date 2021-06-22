import React from 'react';
import './ILform.css';

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) =>{
	return (
		<div>
			<p className='f3'>
				{'Brain that detects the face in a picture'}
			</p>
			<div className='center'>
				<div className='form center pa4 br3 shadow-5' >
					<input className='f4 pa2 w-70 center z-index-one' type='text' onChange={ onInputChange } />
					<button className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple' onClick={onButtonSubmit} >Detect</button>
				</div>
			</div>
		</div>
	);
}

export default ImageLinkForm;
