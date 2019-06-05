import React from 'react';

export function Link(props){
	let {url, text} = props
	
	return(
		<a href={url}>text</a>
	)
}

Link.defaultProps = {
  url: 'https://google/com',
  text: 'I am a link'
};