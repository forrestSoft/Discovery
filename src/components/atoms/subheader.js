import React from 'react';

export default function SubText(props){
	return(<h2>{props.text}</h2>)
}

SubText.defaultProps = {
  text: 'i am subText'
};

