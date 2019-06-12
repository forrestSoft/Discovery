import React from 'react'

import Text from 'atoms/text'
import TextInput from 'atoms/textinput'
import Button from 'atoms/button'
import Header from 'atoms/header'

import './step2.scss'

function Step2(props){
	return(
		<React.Fragment>
			<div className="App step2">
				<Header text="join the list" />
				<div>
					<Text type="h2">
						<Text type="span">Almost Done! Please Enter</Text>
						<Text type="span">Your First and Last Name.</Text>
					</Text>
					<div className="inputWrapper">
						<div>
							<TextInput 
								placeholder="First Name" 
								onChange={props.handleChange('firstName')}
								value={props.data.firstName}
								valid={props.data.firstNameValid}
							/>
							<TextInput
								placeholder="Last Name" 
								onChange={props.handleChange('lastName')}
								value={props.data.lastName}
								valid={props.data.lastNameValid}
							/>
						</div>
						<Button 
							handleClick={props.handleClick}
							text="Sign up" 
							disabled={!(props.data.firstNameValid && props.data.lastNameValid)}

						/>
					</div>
				</div>
			</div>
		</React.Fragment>
	)
}

export default Step2;
 