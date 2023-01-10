import * as React from "react";
export type Element = (state: boolean) => React.ReactElement<any> | React.ReactElement<any>

const useHover = (element: Element): [Reeact.ReactElement, boolean] => {
  return [element, false]
}

export default useHover;