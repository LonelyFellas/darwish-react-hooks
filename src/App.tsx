import React from 'react';
import './App.css';
import isBlanks from "./functions/isBlanks";
function App() {
  const [isBool, setIsBool] = React.useState(false);
    // number
    // string
    // undefined
    // null
    // NaN
    // Infinity
  return (
    <div className="App">
      <h1>Hello, {isBool ? 'Darwish' : 'aLin'}</h1>

      <button onClick={() => setIsBool(isBlanks(Infinity))}>Change State</button>
    </div>
  );
}

export default App;
