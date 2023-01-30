import * as React from "react";

export interface Actions<T>{
  toggle: () => void,
  set: (settingValue: T) => void,
  setLeft: () => void,
  setRight: () => void,
}

function useToggle<T = boolean>(): [boolean, Actions<T>];

function useToggle<T>(): [T, Actions<T>];

function useToggle<T, U>(defaultValue: T, reverseValue: U): [T | U, Actions<T | U>];

function useToggle<T, U>(defaultValue: T = false as unknown as T, reverseValue?: U) {
  const [state, setState] = React.useState<T | U>(defaultValue);

  const action = React.useMemo(() => {
    const reverseValueOrigin = (reverseValue === 'undefined' ? !defaultValue : reverseValue) as T | U;

    const toggle = () => {
      setState(prev => prev === defaultValue ? reverseValueOrigin : defaultValue)
    }
    const set = (settingValue: T | U) => {
      setState(settingValue);
    }
    const setLeft = () => {
      setState(defaultValue);
    }
    const setRight = () => {
      setState(reverseValueOrigin)
    }

    return {
      toggle,
      set,
      setLeft,
      setRight
    }
  }, []);

  return [state, action]
}

export default useToggle

