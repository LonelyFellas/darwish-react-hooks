import * as React from "react";
export type Element = ((state: boolean) => React.ReactElement<any>) | React.ReactElement<any>

const useHover = (element: Element): [React.ReactElement<any>, boolean] => {
  
  const handleMouseOver = () => {

  }

  const handleMouseLeave = () => {
    
  }


  if (typeof element === 'function') {
    element = element(false);
  }

  const el = React.cloneElement(element, {
    onMouseOver: handleMouseOver,
    onMouseLeave: handleMouseLeave
  })
  return [el, false]
}

export default useHover;