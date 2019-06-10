
import React from 'react';

export default function TextInput(props){
	let { value, placeholder} = props

	return(
		<input 
			type="text"
			placeholder={placeholder}
			value={value}
			onChange={props.onChange || null}
		/>
	)
}

TextInput.defaultProps = {
  placeholder: 'I am the placeholder'
  // value: ''
};