import React from 'react';

export default function CheckBox(props){
	return(
		<input 
			type="checkbox" 
			checked={props.checked}
			onChange={props.onChange}
			className={props.checked ? 'valid' : 'invalid'}
		/>
	)
}
