import React from 'react'
import {shallow, mount} from 'enzyme'
import shallowToJson from 'enzyme-to-json'

import Step3 from './step3'

it('render matches snapshot', () => {
  const mock = jest.fn().mockReturnValue('onClick')
  const step3 = shallowToJson(shallow(
  	<Step3
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
  expect(step3).toMatchSnapshot();
});