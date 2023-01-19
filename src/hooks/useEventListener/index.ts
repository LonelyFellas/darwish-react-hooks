import * as React from 'react';
const useEventListener = (type: any, handle: (this: Window, ev: any) => any, el=window) => {

  React.useLayoutEffect(() => {
    el.addEventListener(type, handle);


    return () => {
      el.removeEventListener(type, handle)
    }
  }, [])

}

export default useEventListener;