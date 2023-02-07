import { useRef } from 'react'

const useLatest = <T>(initialValue: T): { readonly current: T} => {
  const valueRef = useRef<T>(initialValue)
  
  valueRef.current = initialValue;

 return valueRef
}

export default useLatest
