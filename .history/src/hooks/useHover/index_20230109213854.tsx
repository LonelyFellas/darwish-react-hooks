export Element = (state: boolean) => React.React

const useHover = (element: Element) => {
  return [element, false]
}

export default useHover;