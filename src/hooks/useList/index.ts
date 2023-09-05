import { useMemo, useState, useRef } from 'react';
import useUpdate from '../useUpdate';
import { isFunction } from 'darwish';

interface IUseListUtil<T> {
  set: (value: IHookState<T[]>) => void;
  push: (value: T) => void;
  updateAt: (index: number, value: T) => void;
  insertAt: (index: number, insertValue: T) => void;
  update: (predicate: (a: T, b: T) => boolean, updateValue: T) => void;
  updateFirst: (predicate: (a: T, b: T) => boolean, updateValue: T) => void;
  upsert: (predicate: (a: T, b: T) => boolean, updateValue: T) => void;
  sort: (callbackFn: (a: T, b: T) => number) => void;
  filter: (
    callbackFn: (value: T, index?: number, array?: T[]) => boolean,
    thisArg?: any
  ) => void;
  removeAt: (index: number) => void;
  clear: () => void;
  reset: () => void;
}

type IHookState<T extends Array<unknown>> = T | ((args: T) => T);
const resolveHooksState = <T extends Array<unknown>>(
  newList: IHookState<T>,
  oldList: T
): T => {
  if (isFunction(newList)) {
    return newList.length ? newList(oldList) : newList([] as any);
  }
  return newList;
};

function useList<T>(initialList: Array<T>): [Array<T>, IUseListUtil<T>] {
  const list = useRef(resolveHooksState(initialList, []));
  const updateFn = useUpdate();
  const utils = useMemo<IUseListUtil<T>>(() => {
    return {
      set: (newList: IHookState<T[]>) => {
        list.current = resolveHooksState(newList, list.current);
        updateFn();
      },
      push: (newItem: T) => {
        utils.set([...list.current, newItem]);
      },
      updateAt: (updateIndex: number, updateItem: T) => {
        utils.set(
          list.current.map((item, i) => (i === updateIndex ? updateItem : item))
        );
      },
      insertAt: (insertIndex: number, insertItem: T) => {
        utils.set((prev: T[]) => {
          let resArr: Array<T> = [];
          prev.forEach((item, i) => {
            if (i === insertIndex) {
              resArr.push(insertItem);
            }
            resArr.push(item);
          });
          return resArr;
        });
      },
      update: (predicate: (a: T, b: T) => boolean, updateItem: T) => {
        utils.set((prev: T[]) =>
          prev.map((item) => (predicate(item, updateItem) ? updateItem : item))
        );
      },
      updateFirst: (predicate: (a: T, b: T) => boolean, updateItem: T) => {
        const index = list.current.findIndex((item) =>
          predicate(item, updateItem)
        );
        index >= 0 && utils.updateAt(1, updateItem);
      },
      upsert: (predicate: (a: T, b: T) => boolean, updateItem: T) => {
        const index = list.current.findIndex((item) =>
          predicate(item, updateItem)
        );
        index >= 0 ? utils.updateAt(1, updateItem) : utils.push(updateItem);
      },
      sort: (compareFn: (a: T, b: T) => number) => {
        utils.set([...list.current].sort(compareFn));
      },
      filter: (
        callbackFn: (value: T, index: number, array: T[]) => boolean,
        thisArg?: any
      ) => {
        utils.set((curr: T[]) => curr.slice().filter(callbackFn, thisArg));
      },
      removeAt: (index: number) => {
        utils.set((prev: T[]) => {
          const arr = prev.slice();
          arr.splice(index, 1);
          return arr;
        });
      },
      clear: () => {
        utils.set([]);
      },
      reset: () => {
        utils.set(initialList);
      },
    };
  }, []);

  return [list.current, utils];
}

export default useList;
