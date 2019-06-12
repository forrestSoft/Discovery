import React, {useState} from 'react'

import Text from 'atoms/text'
import Header from 'atoms/header'
import Step1 from 'molecules/step1'
import Step2 from 'molecules/step2'
import Step3 from 'molecules/step3'

export default function Signup(){
	let [step, setStep] = useState(1)
	let [data, setData] = useState({
		firstName: '',
		firstNameValid: false,
		lastName: '',
		lastNameValid: false,
		email: '',
		emailValid: false,
		checkboxChecked: false
	})

	// these return functions that should be called in the actual
	// event handler assignment and have their appropriate param 
	// passed
	const nextStep = step => () => {
		setStep(step)
	}

	const handleChange = (newData, _) => (e,_) => {
		// TODO: there must be a better way
		let value = e.target.type !="checkbox" ? e.target.value : e.target.checked
		
		setData((prevState)=>{
			let validation = validate(newData, value)
			
			return ({
				...data,
				...validation,
				[newData]: value
			})
		})
	}
	
	// TODO: this seems kludgey and I should be flogged
	const validate = (key, value) => {
		let result	
		switch(key){
			case 'firstName':
			case 'lastName':
				result = value.length ? true : false
				break;
			case 'email': 
				result = (value.length && value.match(/.+@.+\..{2,4}/)) ? true : false
				break;
			case 'checkboxChecked':
				result = value
		}	
		
		return ({[`${key}Valid`]: result})
	}

	return(
		<React.Fragment>
				{step === 1 &&
					(
						<Step1 
							handleClick={nextStep(2)}
							data={data}
							handleChange={handleChange}
						/>
					)
				}

				{step === 2 &&
					(<div className="App step2">
						<Header text="join the list" />
						<div>
					    <Step2 
					    	handleClick={nextStep(3)}
					    	data={data}
								handleChange={handleChange}
				    	/>
			    	</div>
		    	</div>)
			  }

			  {step === 3 &&
			  	(<div className="App step3">
				  	<Header text="congratulations!" />
				  	<div>
					    <Step3 /> 
				    </div>
			    </div>)
			  }
		</React.Fragment>
	)
}