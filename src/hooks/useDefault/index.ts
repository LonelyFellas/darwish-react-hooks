import * as React from "react";
const useDefault = <T>(defaultValue:T, initialValue:T | (() => T)) => {
  const [value, setValue] = React.useState<T | undefined | null>(initialValue);

  if ( value === undefined || value === null) {
    return [defaultValue, setValue] as const
  }
  return [value, setValue] as const
}

export default useDefault;