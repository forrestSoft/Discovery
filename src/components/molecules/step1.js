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
			<Text type="h2">
				<Text type="span">
					Sign up for 
				</Text>
				<Text type="span">
					the TLC newsletter.
				</Text>
			</Text>
			<div className="inputWrapper">
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
					<Link text="Privacy Policy" url="https://google.com" />
				</Text>
			</div>
		</React.Fragment>
	)
}

export default Step1;
