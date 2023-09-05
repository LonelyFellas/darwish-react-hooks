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
import UseListDemo from './hooks/useList/UseList.demo';
// import UseEffectOnceDemo from './hooks/useUpdateEffectOnce/UseUpdateEffectOnce.demo';
// import UseReactState from './hooks/useReactState/UseReactState.demo';
// import UseTimeoutDemo from './hooks/useTimeoutFn/index.demo';
// import UseScrollDemo from './hooks/useScroll/index.demo';
// import UseAsyncDemo from './hooks/useAsync/index.demo';
import useVirtualList from './hooks/useVirtualList';
import deepMerge from './functions/deepMerge';
import filterUselessKeyValue from './functions/filterUselessKeyValue';
import UseVirtualList from './hooks/useVirtualList/index.demo';
function App() {
  const x = {
    record: {
      prop1: 'value1',
      prop2: 'value2',
    },
    array: [1, 2, 3],
    set: new Set([1, 2, 3]),
    map: new Map([
      ['key1', 'value1'],
      ['key2', 'value2'],
    ]),
  };

  const y = {
    record: {
      prop1: 'changed',
      prop3: 'value3',
    },
    array: [2, 3, 4],
    set: new Set([2, 3, 4]),
    map: new Map([
      ['key2', 'changed'],
      ['key3', 'value3'],
    ]),
  };

  return (
    <div className="App">
      {/* <UseVirtualList /> */}
      <UseListDemo />
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
