import * as React from "react";

/**
 * 
 * @param ms 毫秒 -> number
 * @returns [isReady: () => boolean | true | false | null, cancel: () => void, reset: () => void] -> Array
 */
const useTimeOut: (ms: number) => [() => boolean, () => void] = (ms: number) => {
  const [time, setTime] = React.useState<NodeJS.Timeout>()
  // React.useEffect(() => {
    
  // }, [])

  const isReady = () => {
    // setTime(setTimeout(() => {}, ms))
    // return !!time;
    return false
  }
  const cancel = () => {
    // clearTimeout(time)
  }

  return [isReady, cancel]
}

export default useTimeOut;