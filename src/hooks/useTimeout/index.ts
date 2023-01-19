import * as React from "react";

/**
 * 
 * @param ms 毫秒 -> number
 * @returns [isReady: () => boolean | true | false | null, cancel: () => void, reset: () => void] -> Array
 */
// const useTimeOut: (ms: number) => [() => boolean, () => void] = (ms: number) => {
//   // const [time, setTime] = React.useState<NodeJS.Timeout>()
//   // // // React.useEffect(() => {
    
//   // // // }, [])

//   // // const isReady = () => {
//   // //   // setTime(setTimeout(() => {}, ms))
//   // //   // return !!time;
//   // //   return false
//   // // }
//   // // const cancel = () => {
//   // //   // clearTimeout(time)
//   // // }
//   // const timeRef = React.useRef<NodeJS.Timeout>()
//   // const stateRef = React.useRef<boolean>(false)
//   // const isReady = React.useCallback(() => {
//   //   console.log("update");
//   //   stateRef.current = true
//   //   timeRef.current = setTimeout(() => {
//   //     stateRef.current = false
//   //     console.log(stateRef.current);
//   //     timeRef.current = undefined
//   //   }, ms)

//   //   return !!stateRef.current
//   // }, [stateRef, stateRef.current])



//   // return [isReady, timeRef.current]
// }
const useTimeout = () => {
  return false
}

export default useTimeout;