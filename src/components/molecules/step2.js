import React from 'react'

import Text from 'atoms/text'
import TextInput from 'atoms/textinput'
import Button from 'atoms/button'

function Step2(){
	return(
		<React.Fragment>
			<Text text="Almost Done! Please Enter Your First and Last Name." />
			<TextInput placeholder="First Name" />
			<TextInput placeholder="Last Name" />
			<Button text="Sign up" />
		</React.Fragment>
	)
}

export default Step2;
 
