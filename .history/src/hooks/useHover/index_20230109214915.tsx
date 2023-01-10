import * as React from "react";
export type Element = (state: boolean) => React.ReactElement<any> | React.ReactElement<any>

const useHover = (element: Element): [React.ReactElement<any>, boolean] => {
  const ele = React.cloneElement(element, {

  })
  return [e, false]
}

export default useHover;