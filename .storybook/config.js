import { configure } from '@storybook/react';
import 'index.scss';
import 'normalize.css'
import 'App.scss';
import 'styles/inputs.scss';
import 'styles/text.scss';

const req = require.context('../src', true, /.stories.js$/);
console.log(req)
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);