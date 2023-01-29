import * as React from "react"
import { isFunction } from "../../functions";
const useSetState: <T>(initialNumber: T) => [T, (params: Pick<T, keyof T> | ((c: T) => Pick<T, keyof T>)) => void] = (initialState) => {
  const [state, setState] = React.useState(initialState);

  const setTarget = (params:any) => {
    setState((prev) => {
      const target = isFunction(params) ? params(prev): params;
      return {
        ...state,
        ...target
      }
    })
  }
  return [state, setTarget]
}

export default useSetState;