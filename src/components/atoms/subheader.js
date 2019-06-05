import React from 'react';

export function Subheader(props){
	return(<h2>props.text</h2>)
}

Subheader.defaultProps = {
  text: 'i am subheader'
};