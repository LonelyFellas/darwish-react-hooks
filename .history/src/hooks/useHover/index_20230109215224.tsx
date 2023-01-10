import * as React from "react";
export type Element = (state: boolean) => React.ReactElement<any> | React.ReactElement<any>

const useHover = (element: Element): [React.ReactElement<any>, boolean] => {

  if (typeof element === 'function') {
    
  }

  const el = React.cloneElement(element(), {

  })
  return [el, false]
}

export default useHover;