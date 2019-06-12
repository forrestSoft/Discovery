import React from 'react'
import {shallow, mount} from 'enzyme'
import shallowToJson from 'enzyme-to-json'

import TextInput from './textinput'

it('render matches snapshot', () => {
  const textinput = shallowToJson(shallow(
  	<TextInput 
      placeholder="I am the placeholder"
    />
  )) 
  expect(textinput).toMatchSnapshot();
});

it('render with value matches snapshot', () => {
  const textinput = shallowToJson(shallow(
  	<TextInput 
      placeholder="I am the placeholder"
      value="I am the value"
    />
  )) 
  expect(textinput).toMatchSnapshot();
});

it('render invalid matches snapshot', () => {
  const textinput = shallowToJson(shallow(
  	<TextInput 
      placeholder="I am the placeholder"
      valid={false}
    />
  )) 
  expect(textinput).toMatchSnapshot();
});

it('render valid matches snapshot', () => {
  const textinput = shallowToJson(shallow(
  	<TextInput 
      placeholder="I am the placeholder"
      valid={true}
    />
  )) 
  expect(textinput).toMatchSnapshot();
});

it('calls passed onChange on "onChange"', () => {
	const mock = jest.fn().mockReturnValue('onClick')
	const textinput = mount(
  	<TextInput 
  		placeholder={'I am a checkbox'}
  		onChange={mock}
  	/>
  )

	textinput.find('input[type="text"]').simulate('change')
	expect(mock).toBeCalled()
})
