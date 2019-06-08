import React from 'react';

export default function Button(props){
	return(<button>{props.text}</button>)
}

Button.defaultProps = {
  text: 'i am a button'
};