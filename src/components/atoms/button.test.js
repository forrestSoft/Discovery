import React from 'react'
import {shallow, mount} from 'enzyme'
import shallowToJson from 'enzyme-to-json'

import Button from './button'

it('render matches snapshot', () => {
  const button = shallowToJson(shallow(
  	<Button 
  		text={'I am a button'}
  		disabled={false}
  	/>
  )) 
  expect(button).toMatchSnapshot();
});

it('render disabled matches snapshot', () => {
  const button = shallowToJson(shallow(
  	<Button 
  		text={'I am a button'}
  		disabled={true}
  	/>
  )) 
  expect(button).toMatchSnapshot();
});

it('calls passed onClick on "onClick"', () => {
	const mock = jest.fn().mockReturnValue('onClick')
	const button = mount(
  	<Button 
  		text={'I am a button'}
  		disabled={false}
  		handleClick={mock}
  	/>
  )

	button.find('button').simulate('click')
	expect(mock).toBeCalled()
})

it('doesnt call passed onClick on "onClick" when disabled', () => {
  const mock = jest.fn().mockReturnValue('onClick')
  const button = mount(
    <Button 
      text={'I am a button'}
      disabled={true}
      handleClick={mock}
    />
  )
  
  button.find('button').simulate('click')
  expect(mock).not.toBeCalled()
})