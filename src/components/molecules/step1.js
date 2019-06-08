import React from 'react'

import Text from 'atoms/text'
import TextInput from 'atoms/textinput'
import Button from 'atoms/button'
import Checkbox from 'atoms/checkbox'
import Link from 'atoms/link'


function Step1(){
	return(
		<React.Fragment>
			<Text text="Sign up for the TLC newsletter" />
			<TextInput placeholder="email address" />
			<Button text="Next" />
			<Checkbox />
			<Text 
				text="I agree to receive information from Discovery Communications in accordance with the following"
				Type="p"
			/>
			<Link text="Privacy Policy" url="asdf" />
		</React.Fragment>
	)
}

export default Step1;
 
