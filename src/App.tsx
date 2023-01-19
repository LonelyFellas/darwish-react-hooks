import React from 'react';
import './App.css';
// import { FrequencyMap } from "./functions/FrequencyMap"
// import TestUseBattery from "./hooks/useBattery/UseBattery.demo"
// import UseHoverDemo from './hooks/useHover/UseHover.demo';
// import UseTimeoutDemo from "./hooks/useTimeout/UseTimeout.demo"
// import UseSessionStorageDemo from './hooks/useStorage/useStorage.demo';
import UseUpdateEffectDemo from './hooks/useUpdateEffect/UseUpdateEffect.Demo';

function App() {

  // const map = new FrequencyMap([1, 2, 3, 4, 1]);
  
  return (
    <div className="App">
      <UseUpdateEffectDemo />
    </div>
  );
}

export default App;
