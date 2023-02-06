import React, { useState } from 'react'
import useEffectOnce from '.'
import useUpdateEffect from '../useUpdateEffect';

function UseUpdateEffectOnceDemo() {
  const [counter, setCounter] = useState(0)

  useEffectOnce(() => {
    console.log("Hello World");
    
  }, [counter])

  useUpdateEffect(() => {
    console.log(counter);
    
  }, [counter])

  const handleClick = () => {
    setCounter(prev => prev+1)
  }
  return (
    <div>
      <h1>value: {counter}</h1>
      <button onClick={handleClick}>click me!</button>
    </div>
  )
}

export default UseUpdateEffectOnceDemo
