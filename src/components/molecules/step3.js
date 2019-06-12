import React from 'react'

import Text from 'atoms/text'
import Header from 'atoms/header'

import './step3.scss'

function Step3 (props){
	console.log(props.data)
	return(
		<React.Fragment>
			<div className="App step3">
				<Header text="congratulations" />
				<div>
					<Text 
						type="h2"
						text="Thank You For Signing Up!" 
					/>
					<Text 
						text="Look out for the latest news on your favorite shows." 
						type="h3" 
					/>
				</div>
			</div>
		</React.Fragment>
	)
}

export default Step3;
 
