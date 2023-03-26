import React from "react";
import useDisplayDevError from "../useDisplayDevError";
const useReactState = <T extends object>(initialValue: T) => {
  const [state, setState] = React.useState(initialValue);
  const dispatchError = useDisplayDevError();

  const proxy = React.useMemo(() => {
    return new Proxy(initialValue, {
      set(obj, prop, value) {
        try {
          obj[prop as keyof T] = value;
          setState((prevState) => {
            return {
              ...prevState,
              prop: state
            }
          });
          return true
        } catch(error) {
          dispatchError(error);
          return false;
        }

      }
    })
  }, []);

  return proxy;
}

export default useReactState;