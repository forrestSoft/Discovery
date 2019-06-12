import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Step2 from './step2';

 const params = {
	handleChange: () => (() => {}),
	handleClick: () => (() => {}),
	data: {
		firstName: '',
		lastName: ''
	}
}

const filled = {
	...params,
	data: {
		firstName:'John',
		lastName: 'Smith',
		firstNameValid: true,
		lastNameValid: true
	}
}

const partial = {
	...params,
	data: {
		firstName:'',
		lastName: 'Smith',
		firstNameValid: false,
		lastNameValid: true
	}
}

storiesOf('step2', module)
  .add('default', () => <Step2 {...params} />)
  .add('filled and valid', () => <Step2 {...filled} />)
  .add('partially filled', () => <Step2 {...partial} />)
  