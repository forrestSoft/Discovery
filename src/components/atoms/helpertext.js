import React from 'react';

export function HelperText(props){
	return(<p>props.text</p>)
}

HelperText.defaultProps = {
  text: 'I am helper text'
};