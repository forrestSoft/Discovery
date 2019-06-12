import React from 'react';

export default function Button(props){
	// console.log(props)
	return(
		<button
			onClick={props.handleClick}
			disabled={props.disabled}
		>
			{props.text}
		</button>)
}

Button.defaultProps = {
  text: 'i am a button'
};