
import React from 'react';

export function TextInput(props){
	let { value, placeholder} = props

	return(
		<input 
			type="text"
			placeholder={props.placeholder}
			value={props.value}
		/>
	)
}

TextInput.defaultProps = {
  placeholder: 'I am the placeholder',
  value: 'I am the value'
};