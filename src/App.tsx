import React, { memo, useDeferredValue } from 'react';
import './App.css';

// import { FrequencyMap } from "./functions/FrequencyMap"
// import TestUseBattery from "./hooks/useBattery/UseBattery.demo"
// import UseHoverDemo from './hooks/useHover/UseHover.demo';
// import UseTimeoutDemo from "./hooks/useTimeout/UseTimeout.demo"
// import UseSessionStorageDemo from './hooks/useStorage/useStorage.demo';
// import UseUpdateEffectDemo from './hooks/useUpdateEffect/UseUpdateEffect.Demo';
// import UseDefaultDemo from './hooks/useDefault/UseDefault.demo';
// import useTitle from './hooks/useTitle';
// import UseFaviconDemo from './hooks/useFavicon/UseFavicon.demo';
// import UseSizeDemo from './hooks/useSize/UseSize.demo';
// import UseCounterDemo from './hooks/useCounter/UseCounter.demo';
// import UseToggleDemo from './hooks/useToggle/UseToggle.demo';
// import UseSetStateDemo from './hooks/useSetState/UseSetState.demo';
// import UseMapDemo from './hooks/useMap/UseMap.demo';
// import UseListDemo from './hooks/useList/UseList.demo';
// import UseEffectOnceDemo from './hooks/useUpdateEffectOnce/UseUpdateEffectOnce.demo';
// import UseReactState from './hooks/useReactState/UseReactState.demo';
// import UseTimeoutDemo from './hooks/useTimeoutFn/index.demo';
// import UseScrollDemo from './hooks/useScroll/index.demo';
import UseAsyncDemo from './hooks/useAsync/index.demo';
function App() {
  return (
    <div
      className="App"
      style={{ display: 'flex', justifyContent: 'center', marginTop: '5rem' }}
    >
      <div
        style={{
          width: '300px',
          height: '300px',
          padding: '20px',
          overflow: 'auto',
          border: '1px solid red',
        }}
      >
        <UseAsyncDemo />
      </div>
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
