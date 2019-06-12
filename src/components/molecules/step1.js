import React from 'react'

import Text from 'atoms/text'
import TextInput from 'atoms/textinput'
import Button from 'atoms/button'
import Checkbox from 'atoms/checkbox'
import Link from 'atoms/link'
import Header2 from 'atoms/header2'

import './step1.scss'

function Step1(props){
	let { data, handleClick,handleChange } = props
	return(
		<React.Fragment>
			<Header2>
				<Text type="span">
					Sign up for 
				</Text>
				<Text type="span">
					the TLC newsletter.
				</Text>
			</Header2>
			<div className="inputWrapper">
				<TextInput placeholder="email address" 
					onChange={handleChange('email')}
					value={data.email}
					valid={data.emailValid}
				/>
				<Button 
					text="Next" 
					handleClick={handleClick}
					disabled = {!(data.emailValid && data.checkboxChecked)}
				/>
			</div>

			<div className="helperTextWrapper">
				<Checkbox 
					checked={data.checkboxChecked}
					onChange={handleChange('checkboxChecked')}
					valid={data.checkboxChecked}
				/>
				<Text type="span" >
					I agree to receive information from Discovery Communications in accordance with the following
					<Link text="Privacy Policy" url="https://google.com" />
				</Text>
			</div>
		</React.Fragment>
	)
}

export default Step1;
