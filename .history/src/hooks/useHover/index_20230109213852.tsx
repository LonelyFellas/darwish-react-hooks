export Element = (state: boolean) => React.createContext.

const useHover = (element: Element) => {
  return [element, false]
}

export default useHover;