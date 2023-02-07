import { DependencyList, useRef } from "react";
import useUpdateEffect from "../useUpdateEffect";

const useEffectOnce = (callback: Function, deps: DependencyList): void => {
  const hasRunOnce = useRef(false)

  useUpdateEffect(() => {
    if (!hasRunOnce.current) {
      callback()
      hasRunOnce.current = true
    }
  }, deps)
} 

export default useEffectOnce;