import React, { memo } from 'react';
import './App.css';
import Store from './darwish-class-store';
import useKey from './hooks/useKey';
function App() {
  const [count, setCount] = React.useState(0);
  const increment = (type: 'up' | 'down') => () => {
    console.log(type);

    setCount((prev) => prev + (type === 'up' ? 1 : -1));
  };
  useKey('ArrowUp', increment('up'));
  useKey('ArrowDown', increment('down'));
  return (
    <div className="App">
      <h1>count: {count}</h1>
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
