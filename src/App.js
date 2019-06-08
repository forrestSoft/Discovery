import React from 'react';

import Step1 from 'molecules/step1'
import Step2 from 'molecules/step2'
import Step3 from 'molecules/step3'


import './App.scss';

function App() {
  return (
    <div className="App">
      <Step1 />
      <Step2 />
      <Step3 />
    </div>
  )
}

export default App;
