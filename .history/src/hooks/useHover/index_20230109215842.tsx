import * as React from "react";
export type Element = ((state: boolean) => React.ReactElement<any>) | React.ReactElement<any>

const useHover = (element: Element): [React.ReactElement<any>, boolean] => {
  const [state, setState] = React.useState(false);

  const handleMouseE = () => {
    setState(true)
  }

  const handleMouseLeave = () => {
    setState(false)
  }


  if (typeof element === 'function') {
    element = element(false);
  }

  const el = React.cloneElement(element, {
    onMouseEnter: hoverable,
    onMouseLeave: handleMouseLeave
  })
  return [el, state]
}

export default useHover;