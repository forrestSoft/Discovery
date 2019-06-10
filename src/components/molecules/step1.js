import React from 'react'

import Text from 'atoms/text'
import TextInput from 'atoms/textinput'
import Button from 'atoms/button'
import Checkbox from 'atoms/checkbox'
import Link from 'atoms/link'

import './step1.scss'

function Step1(props){
	return(
		<React.Fragment>
			<Text 
				type="h2"
				text="Sign up for the TLC newsletter"
			/>
			<div class="inputWrapper">
				<TextInput placeholder="email address" 
					onChange={props.handleChange('email')}
					value={props.data.email}
				/>
				<Button text="Next" 
					handleClick = {props.handleClick}
				/>
			</div>

			<div className="helperTextWrapper">
				<Checkbox />
				<Text type="span" >
					I agree to receive information from Discovery Communications in accordance with the following
					<Link text="Privacy Policy" url="asdf" />
				</Text>
			</div>
		</React.Fragment>
	)
}

export default Step1;
