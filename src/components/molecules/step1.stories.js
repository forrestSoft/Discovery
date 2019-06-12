import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Step1 from './step1';

 const params = {
	handleChange: () => (() => {}),
	handleClick: () => (() => {}),
	data: {
		email: ''
	}
}

const invalid = {
	handleChange: () => (() => {}),
	handleClick: () => (() => {}),
	data: {
		email: 'bob@smith',
		emailValid: false,
		checkboxChecked: true
	}
}

const valid = {
	handleChange: () => (() => {}),
	handleClick: () => (() => {}),
	data: {
		email: 'bob@smith.org',
		emailValid: true,
		checkboxChecked: true
	}
}

storiesOf('step1', module)
  .add('default', () => <Step1 {...params} />)
  .add('invalid', () => <Step1 {...invalid} />)
  .add('valid', () => <Step1 {...valid} />)
  