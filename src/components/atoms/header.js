import React from 'react';

export function Header(props){
	return(<h1>props.text</h1>)
}

Header.defaultProps = {
  text: 'I am header'
};