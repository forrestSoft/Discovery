import React from 'react';

import {Button} from './components/atoms/button'
import {CheckBox} from './components/atoms/checkbox'
import {Header} from './components/atoms/header'
import {HelperText} from './components/atoms/helpertext'
import {Link} from './components/atoms/link'
import {Subheader} from './components/atoms/subheader'
import {TextInput} from './components/atoms/textinput'



import './App.scss';

function App() {
  return (
    <div className="App">
      <Button />
      <CheckBox />
      <Header />
      <HelperText />
      <Link />
      <Subheader/>
      <TextInput />
    </div>
  );
}

export default App;
