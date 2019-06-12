import React from 'react'
import {shallow, mount} from 'enzyme'
import shallowToJson from 'enzyme-to-json'

import Link from './link'

it('render matches snapshot', () => {
  const link = shallowToJson(shallow(
  	<Link 
      text="I am test helper text"
      url="google.com"
    />
  )) 
  expect(link).toMatchSnapshot();
});
