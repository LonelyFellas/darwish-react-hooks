import React, { memo, useCallback, useState } from 'react';
import './App.css';
import useCookie from './hooks/useCookie';
import useSet from './hooks/useSet';
function App() {
  const [set, { add, has, remove, toggle, reset }] = useSet(['hello']);

  return (
    <div className="App">
      <button onClick={() => add(String(Date.now()))}>Add</button>
      <button onClick={() => reset()}>Reset</button>
      <button onClick={() => remove('hello')} disabled={!has('hello')}>
        Remove 'hello'
      </button>
      <button onClick={() => toggle('hello')}>Toggle hello</button>
      <pre>{JSON.stringify(Array.from(set), null, 2)}</pre>
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
