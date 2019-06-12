
import React from 'react';

export default function TextInput(props){
	let { value, placeholder, valid} = props

	return(
		<input 
			type="text"
			placeholder={placeholder}
			value={value}
			onChange={props.onChange || null}
			className={valid ? 'valid' : 'invalid'}
		/>
	)
}

TextInput.defaultProps = {
  placeholder: 'I am the placeholder'
  // value: ''
};