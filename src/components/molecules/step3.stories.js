import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Step3 from './step3';

storiesOf('step3', module)
  .add('default', () => <Step3 />)
  