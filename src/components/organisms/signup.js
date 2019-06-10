import React, {useState} from 'react'

import Text from 'atoms/text'
import Step1 from 'molecules/step1'
import Step2 from 'molecules/step2'
import Step3 from 'molecules/step3'

export default function Signup(){
	let [step, setStep] = useState(1)
	let [data, setData] = useState({
		firstName: '',
		lastName: '',
		email: 'ikl,'
	})

	// functional composition style, execute the function
	// in the prop definitions below, let closures do their thing
	// and then finalize application in situ inside the actual event
	// handler assignment. no need for lexical scope binding. this 
	// style seems much cleaner than:
	// this.function = this.function.bind(this) plus
	// you get partial application to keep things DRY
	const nextStep = step => () => {
		setStep(step)
	}

	const handleChange = (newData, _) => (e,_) => {
		setData({...data, [newData]: e.target.value})
	}

	return(
		<React.Fragment>
			<Text Type='h1' text="join the list" />
			<div>
				{step === 1 &&
					<Step1 
						handleClick={nextStep(2)}
						data={data}
						handleChange={handleChange}
					/>
				}

				{step === 2 &&
			    <Step2 
			    	handleClick={nextStep(3)}
			    	data={data}
						handleChange={handleChange}
		    	/>
			  }
			  
			  {step === 3 &&
			    <Step3 /> &&
			    console.log(data)
			  }
		  </div>
		</React.Fragment>
	)
}