import React from 'react';

export default function Text(props){
	let { text, Type, type } = props
	if(type && !!Type){
		Type = type
	}

	return(<Type>{text || props.children}</Type>)
}

Text.defaultProps = {
  Type: 'h1'
};