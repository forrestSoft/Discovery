import React from 'react';

export default function HelperText(props){
	return(<p>{props.text}</p>)
}

HelperText.defaultProps = {
  text: 'I am helper text'
};