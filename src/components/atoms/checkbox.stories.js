import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Checkbox from './checkbox';

storiesOf('Checkbox', module)
  .add('default', () => <Checkbox checked={false}/>)
  .add('checked', () => <Checkbox checked={true} />)
  