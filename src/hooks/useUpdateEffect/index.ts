import * as React from "react";
import useFirstMountState from "../useFirstMountState";
const useUpdateEffect: typeof React.useEffect = (effect, deps) => {
  const firstMountState = useFirstMountState();

  React.useEffect(() => {
    if (!firstMountState) {
      return effect()
    }
  }, deps)

}

export default useUpdateEffect;