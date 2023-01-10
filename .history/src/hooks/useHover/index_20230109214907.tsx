import * as React from "react";
export type Element = (state: boolean) => React.ReactElement<any> | React.ReactElement<any>

const useHover = (element: Element): [React.ReactElement<any>, boolean] => {
  const ele = React.cloneElement(element, {
    
  })
  return [element, false]
}

export default useHover;