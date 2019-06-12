import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Text from './text';

storiesOf('Text', module)
  .add('h1', () => <Text type="h1" text="I am an h1" />)
  .add('h2', () => <Text type="h2" text="I am an h2" />)
  .add('h3', () => <Text type="h3" text="I am an h3" />)
  .add('p', () => <Text type="p" text="I am an p" />)
  .add('span', () => <Text type="span" text="I am a span" />)
  
  