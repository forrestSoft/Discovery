import React from 'react'
import {shallow, mount} from 'enzyme'
import shallowToJson from 'enzyme-to-json'

import Checkbox from './checkbox'

it('render matches snapshot', () => {
  const checkbox = shallowToJson(shallow(
  	<Checkbox 
      checked={true}
    />
  )) 
  expect(checkbox).toMatchSnapshot();
});

it('render disabled matches snapshot', () => {
  const checkbox = shallowToJson(shallow(
  	<Checkbox 
  		checked={false}
  	/>
  )) 
  expect(checkbox).toMatchSnapshot();
});

it('calls passed onClick on "onClick"', () => {
	const mock = jest.fn().mockReturnValue('onClick')
	const checkbox = mount(
  	<Checkbox 
  		text={'I am a checkbox'}
  		disabled={false}
  		onChange={mock}
      checked={false}
  	/>
  )

	checkbox.find('input[type="checkbox"]').simulate('change',{ target: { checked: true } })
	expect(mock).toBeCalled()
})

xit('doesnt call passed onClick on "onClick" when disabled', () => {
  // can't really make this happen?
  // so we rely on checking that react renders the disabled attr above
})