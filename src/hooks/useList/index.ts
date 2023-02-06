import { useMemo, useState } from 'react';
import cloneDeep from '../../functions/cloneDeep';

type IUseListUtil<T> = {
  set: (value: T[]) => void;
  push: (value: any) => void;
  updateAt: (index: number, value: any) => void;
  insertAt: (index: number, insertValue: any) => void;
  update: () => void;
  updateFirst: (updateValue: any) => void;
  upsert: () => void;
  sort: (callbackFn: (a: T, b: T) => number) => void;
  filter: (
    callbackFn: (value: T, index?: number, array?: T[]) => boolean,
    thisArg?: any
  ) => void;
  removeAt: (index: number) => void;
  clear: () => void;
  reset: () => void;
};

function useList<T>(initialNumber: T[]): [T[], IUseListUtil<T>] {
  const [state, setState] = useState(initialNumber);

  const utils = useMemo(() => {
    const set = (newState: T[]) => {
      setState(newState);
    };

    const push = (pushValue: any) => {
      setState((prev) => {
        const cloneData = cloneDeep(prev);
        cloneData.push(pushValue);
        return cloneData;
      });
    };
    const updateAt = (index: number, updateValue: any) => {
      setState(prev => prev.map((item, i) => i === index ? updateValue: item))
    };

    const insertAt = (index: number, insertValue: any) => {
      setState( prev => {
        const cloneData = structuredClone(prev)
        cloneData.splice(index, 0, insertValue)
        return cloneData;
      })
    };

    const update = () => {};

    const updateFirst = (updateValue: any) => {
      setState(prev => prev.map((item, index) => index === 0 ? updateValue : item ))
    };

    const upsert = () => {};

    const sort = (callbackFn: (a: T, b: T) => number) => {
      setState((prev) => {
        return structuredClone(prev).sort(callbackFn)
      });
    };

    const filter = (
      callbackFn: (value: T, index?: number, array?: T[]) => boolean
    ) => {
      setState((prev) => prev.filter(callbackFn));
    };

    const removeAt = (index: number) => {
      setState((prev) => {
        const cloneData = structuredClone(prev)
        cloneData.splice(index, index + 1);
        return cloneData;
      });
    };

    const clear = () => {
      setState([]);
    };

    const reset = () => {
      setState(initialNumber);
    };

    return {
      set,
      push,
      updateAt,
      insertAt,
      update,
      updateFirst,
      upsert,
      sort,
      filter,
      removeAt,
      clear,
      reset,
    };
  }, []);

  return [state, utils];
}

export default useList;