import * as React from "react";
export type Element = (state: boolean) => React.ReactElement<any> | React.ReactElement<any>

const useHover = (element: Element): [React.ReactElement<any></any>, boolean] => {
  return [element, false]
}

export default useHover;