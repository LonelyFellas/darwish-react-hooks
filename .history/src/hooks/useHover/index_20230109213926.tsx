import * as React from "react";
export Element = (state: boolean) => React.ReactElement<any></any>

const useHover = (element: Element) => {
  return [element, false]
}

export default useHover;