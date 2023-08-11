import React from 'react';
const useAsync = <T extends (...args: any) => Promise<any>>(fn: T) => {
  const initialState = { loading: false, error: null, value: null };
  const stateReducer = (
    _: unknown,
    action: {
      type: 'start' | 'finish' | 'error';
      error?: unknown;
      value?: any;
    }
  ) => {
    switch (action.type) {
      case 'start':
        return { loading: true, error: null, value: null };
      case 'finish':
        return { loading: false, error: null, value: action.value };
      case 'error':
        return { loading: false, error: action.error, value: null };
    }
  };

  const [state, dispatch] = React.useReducer(stateReducer, initialState);

  const run = async (args = null) => {
    try {
      dispatch({ type: 'start' });
      const value = await fn(args);
      dispatch({ type: 'finish', value });
    } catch (error) {
      dispatch({ type: 'error', error });
    }
  };

  return { ...state, run } as const;
};
export default useAsync;
