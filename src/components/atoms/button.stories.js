import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Button from './button';

// export const task = {
//   id: '1',
//   title: 'Button',
//   state: 'Button',
//   updatedAt: new Date
// };

// export const actions = {
//   onPinTask: action('onPinTask'),
//   onArchiveTask: action('onArchiveTask'),
// };

storiesOf('Button', module)
  .add('default', () => <Button text={"test"} />)
  .add('disabled', () => <Button text={"test"} disabled={true} />)
  // .add('pinned', () => <Task task={{ ...task, state: 'TASK_PINNED' }}  />)
  // .add('archived', () => <Task task={{ ...task, state: 'TASK_ARCHIVED' }} />);