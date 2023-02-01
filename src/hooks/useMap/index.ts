import * as React from 'react';

interface IUseMapParams {
  [P: string | number]: unknown;
}

const useMap = <T extends object = any>(defaultMapValue: T = {} as T) => {
  const [mapState, setMapState] = React.useState(defaultMapValue);

  const actions = React.useMemo(() => {
    const set = <K extends keyof IUseMapParams>(
      keyProp: K,
      valueProp: unknown
    ) => {
      setMapState((prev) => ({ ...prev, [keyProp]: valueProp }));
    };

    const setAll = <U extends T>(allValue: U) => {
      setMapState(allValue);
    };

    const remove = <K extends keyof T>(removeValue: K) => {
      setMapState((prev) => {
        const  { [removeValue]: omit, ...rest} = prev;
        return rest as T;
      });
    };

    const reset = () => {
      setMapState(mapState);
    };

    return {
      set,
      setAll,
      remove,
      reset,
    };
  }, []);

  const utils = {
    get: React.useCallback((key: keyof T) => mapState[key], []),
    ...actions
  }

  return [mapState, utils] as const;
};

export default useMap;
