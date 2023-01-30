import * as React from 'react';
import { isFunction } from '../../functions';

type SetState<T> = Pick<T, keyof T> | ((c: T) => Pick<T, keyof T>);
const useSetState = <T>(
  initialState: T
): [T, (params: SetState<T>) => void] => {
  const [state, setState] = React.useState<T>(initialState);

  const setTarget = React.useCallback((params: SetState<T>) => {
    setState((prev) => {
      const newState = isFunction(params) ? params(prev) : params;
      return newState
        ? {
            ...prev,
            ...newState,
          }
        : prev;
    });
  }, []);

  return [state, setTarget];
};

export default useSetState;
