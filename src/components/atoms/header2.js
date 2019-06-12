import React from 'react';

import Text from './text'
export default function SubText(props){
	return(
		<Text type="h2">
			{props.children || props.text}
		</Text>
	)
}

SubText.defaultProps = {
  text: 'i am subText'
};

