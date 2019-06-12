import React from 'react'
import {shallow} from 'enzyme'
import shallowToJson from 'enzyme-to-json'

import HelperText from './helpertext'

it('render matches snapshot', () => {
  const helpertext = shallowToJson(shallow(
  	<HelperText 
      text="I am test helper text"
    />
  )) 
  expect(helpertext).toMatchSnapshot();
});
