import * as React from "react";
import useDisplayDevError from "../useDisplayDevError";
import useEventListener from "../useEventListener";
const useSize = (ref: React.MutableRefObject<HTMLElement | null>) => {

  const [size, setSize] = React.useState<{width: number, height: number}>()
  const dispatchError = useDisplayDevError()

  const handleEvent = () => {
    if (!ref.current) {
      dispatchError("需监听DOM未绑定");
      return;
    }

    setSize({
      width: ref.current.offsetWidth,
      height: ref.current.offsetHeight
    })
    
  }

  useEventListener('resize', handleEvent, window);

  React.useEffect(() => {
    handleEvent()
  }, [])

  
  

  return size;
}

export default useSize;