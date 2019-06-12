import React from 'react'
import {shallow, mount} from 'enzyme'
import shallowToJson from 'enzyme-to-json'

import Step1 from './step1'

it('render matches snapshot', () => {
  const mock = jest.fn().mockReturnValue('onClick')
  const step1 = shallowToJson(shallow(
  	<Step1 
      handleChange={mock}
      data={
        {
          email: '',
          emailValid: false,
          checkboxChecked: false
        }
      }
    />
  )) 
  expect(step1).toMatchSnapshot();
});

it('render with data matches snapshot', () => {
  const mock = jest.fn().mockReturnValue('onClick')
  const step1 = shallowToJson(shallow(
    <Step1 
      handleChange={mock}
      data={
        {
          email: 'bob',
          emailValid: false,
          checkboxChecked: true
        }
      }
    />
  )) 
  expect(step1).toMatchSnapshot();
});

it('render with data disables button', () => {
  const mock = jest.fn().mockReturnValue(jest.fn())
  const mock2 = jest.fn().mockReturnValue(jest.fn())

  const step1 = mount(
    <Step1 
      handleChange={mock}
      handleClick={mock2}
      data={
        {
          email: 'bob',
          emailValid: false,
          checkboxChecked: true
        }
      }
    />
  )
  
  expect(step1.find('button').is('[disabled]')).toBe(true)
});

it('ensures passed handlers are called', () => {
  const mock = jest.fn().mockReturnValue(jest.fn())
  const mock2 = jest.fn().mockReturnValue(jest.fn())
  
  const step1 = mount(
    <Step1 
      handleChange={mock}
      handleClick={mock2}
      data={
        {
          email: 'bob',
          emailValid: true,
          checkboxChecked: true
        }
      }
    />
  )
  
  step1.find('input').first().simulate('change')
  expect(mock).toBeCalled()

  step1.find('input').at(1).simulate('change')
  expect(mock).toBeCalled()

  step1.find('button').simulate('click')
  expect(mock2).toBeCalled()
});

it('ensures passed handlers are not called', () => {
  const mock = jest.fn().mockReturnValue(jest.fn())
  const mock2 = jest.fn().mockReturnValue(jest.fn())
  
  const step1 = mount(
    <Step1 
      handleChange={mock}
      handleClick={mock2}
      data={
        {
          email: 'bob',
          emailValid: false,
          checkboxChecked: true
        }
      }
    />
  )
  
  step1.find('button').simulate('click')
  expect(mock2).not.toBeCalled()
});
