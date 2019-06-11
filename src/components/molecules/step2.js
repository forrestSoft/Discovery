import React from 'react'

import Text from 'atoms/text'
import TextInput from 'atoms/textinput'
import Button from 'atoms/button'

import './step2.scss'

function Step2(props){
	return(
		<React.Fragment>
			<Text 
				type="h2" 
				text="Almost Done! Please Enter Your First and Last Name."
			/>
			<div className="inputWrapper">
				<TextInput 
					placeholder="First Name" 
					onChange={props.handleChange}
					value={props.data.firstName}
				/>
				<TextInput placeholder="Last Name" />
				<Button 
					handleClick={props.handleClick}
					text="Sign up" 
					value={props.data.lastName}
				/>
			</div>
		</React.Fragment>
	)
}

export default Step2;
 