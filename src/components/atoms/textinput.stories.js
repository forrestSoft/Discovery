import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import TextInput from './textinput';

storiesOf('TextInput', module)
  .add('default', () => <TextInput type="text" />)
  .add('filled', () => <TextInput type="text" value="I am an input" />)
  .add('valid', () => <TextInput type="text" text="I am a valid input" valid={true} />)
  