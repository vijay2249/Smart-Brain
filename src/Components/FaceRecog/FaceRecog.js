import React from 'react';
import './FaceRecog.css';

const Face = ({ input, regions, height, width }) =>{
	let faceBoxes = [];
	let params={};
	for (let index = 0; index < regions.length; index++) {
		const e = regions[index].region_info.bounding_box;
		params={
			leftCol: e.left_col*width,
			topRow: e.top_row*height,
			rightCol: (1-e.right_col)*width,
			bottomRow: (1-e.bottom_row)*height
		}
		faceBoxes.push(params);
	}

	const ReturnBox = (props) =>{
		return(
			<div 
				className='face-box' 
				style={
					{
						top:props.box.topRow, 
						right:props.box.rightCol, 
						bottom:props.box.bottomRow, 
						left:props.box.leftCol
					}
				}>
			</div>
		);
	}
	return (
		<div className='center ma' >
			<div className='absolute mt2'>
				<img id='inputImage' alt='' src={input} width='auto' height='500px' />
				{faceBoxes.map((box,index)=><ReturnBox box={box} key={index} i={index}/>)}
			</div>
		</div>
	);
}

export default Face;