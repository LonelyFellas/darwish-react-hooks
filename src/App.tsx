import React, { memo, useCallback, useState } from 'react';
import './App.css';
import useCookie from './hooks/useCookie';
import useSet from './hooks/useSet';
import deepEqual from './functions/deepEqual';
import typeof_data from './functions/typeof_data';

function App() {
  const date1 = new Date('2002-01-01');
  const date2 = new Date('2002-01-01');
  const dataNull = Symbol(1);
  console.log(typeof_data(dataNull));

  return <div className="App"></div>;
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
