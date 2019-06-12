import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Link from './link';

storiesOf('Link', module)
  .add('default', () => <Link text="I am a link" />)
  