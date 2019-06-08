import React from 'react';

export default function Text(props){
	let { text, Type } = props
	return(<Type>{text}</Type>)
}

Text.defaultProps = {
  text: 'I am Text',
  Type: 'H1'
};