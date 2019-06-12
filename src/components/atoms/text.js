import React from 'react';

export default function Text(props){
	let { text, Type, type } = props
	if(type && !Type){
		Type = type
	}
	debugger

	return(<Type>{text || props.children}</Type>)
}

Text.defaultProps = {
  type: 'h1'
};