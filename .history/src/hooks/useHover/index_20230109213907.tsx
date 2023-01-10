
export Element = (state: boolean) => React.ReactElement

const useHover = (element: Element) => {
  return [element, false]
}

export default useHover;