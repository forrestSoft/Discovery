import React from 'react';

export default function Header(props){
	return(<h1>{props.children || props.text}</h1>)
}

Header.defaultProps = {
  text: 'i am header text'
};

