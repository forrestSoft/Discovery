import React from 'react'
import {shallow, mount} from 'enzyme'
import shallowToJson from 'enzyme-to-json'

import Step2 from './step2'

it('render matches snapshot', () => {
  const mock = jest.fn().mockReturnValue('onClick')
  const step2 = shallowToJson(shallow(
  	<Step2 
      handleChange={mock}
      data={
        {
          firstName: '',
          firstNameValid: false,
          lastName: '',
          lastNameValid: false
        }
      }
    />
  )) 
  expect(step2).toMatchSnapshot();
});

it('render with data matches snapshot', () => {
  const mock = jest.fn().mockReturnValue('onClick')
  const step2 = shallowToJson(shallow(
    <Step2 
      handleChange={mock}
      data={
        {
          firstName: 'john',
          firstNameValid: false,
          lastName: 'smith',
          lastNameValid: false
        }
      }
    />
  )) 
  expect(step2).toMatchSnapshot();
});

it('render without data disables button', () => {
  const mock = jest.fn().mockReturnValue(jest.fn())
  const mock2 = jest.fn().mockReturnValue(jest.fn())

  const step2 = mount(
    <Step2 
      handleChange={mock}
      handleClick={mock2}
      data={
        {
          firstName: '',
          firstNameValid: false,
          lastName: '',
          lastNameValid: false
        }
      }
    />
  )
  
  expect(step2.find('button').is('[disabled]')).toBe(true)
});

it('ensures passed handlers are called', () => {
  const mock = jest.fn().mockReturnValue(jest.fn())
  const mock2 = jest.fn().mockReturnValue(jest.fn())
  
  const step2 = mount(
    <Step2 
      handleChange={mock}
      handleClick={mock2}
      data={
        {
          firstName: 'bob',
          firstNameValid: true,
          lastName: 'smith',
          lastNameValid: true
        }
      }
    />
  )
  
  step2.find('input').first().simulate('change')
  expect(mock).toBeCalled()

  step2.find('input').at(1).simulate('change')
  expect(mock).toBeCalled()

  step2.find('button').simulate('click')
  expect(mock2).toBeCalled()
});

it('ensures passed handlers are not called', () => {
  const mock = jest.fn().mockReturnValue(jest.fn())
  const mock2 = jest.fn().mockReturnValue(jest.fn())
  
  const step2 = mount(
    <Step2 
      handleChange={mock}
      handleClick={mock2}
      data={
        {
          firstName: 'bob',
          firstNameValid: false,
          lastName: 'smith',
          lastNameValid: false
        }
      }
    />
  )
  
  step2.find('button').simulate('click')
  expect(mock2).not.toBeCalled()
});
