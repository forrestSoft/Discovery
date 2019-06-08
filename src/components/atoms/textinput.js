
import React from 'react';

export default function TextInput(props){
	let { value, placeholder} = props

	return(
		<input 
			type="text"
			placeholder={placeholder}
			value={value}
		/>
	)
}

TextInput.defaultProps = {
  placeholder: 'I am the placeholder'
  // value: ''
};