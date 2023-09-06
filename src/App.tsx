import React, { memo } from 'react';
import './App.css';
import Store from './darwish-class-store';
import useTextSelection from './hooks/useTextSelection';
// import useKey from './hooks/useKey';
function App() {
  const { text } = useTextSelection();
  return (
    <div className="App">
      <h1>first-area: dfsdfsdfsdfsdfsdfsfdfs</h1>
      <h1>second-area: uubvifgndfngdifgdnfg</h1>
      <h1>third-area: 短发短发啥地方啥地方是的</h1>
      <h1>result: {text}</h1>
    </div>
  );
}

export default App;

const LongList = memo(({ derValue }: { derValue: string }) => {
  return (
    <ul>
      {Array(50000)
        .fill('a')
        .map((item, index) => (
          <li key={index}>{derValue}</li>
        ))}
    </ul>
  );
});
