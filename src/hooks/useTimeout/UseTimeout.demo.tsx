import React from 'react'
import useTimeOut from '.'

const UseTimeoutDemo = () => {
  const [isReady, cancel] = useTimeOut(500)
  return (
    <div>
      <h1>{isReady() ? 'start' : 'end'}</h1>
    </div>
  )
}

export default UseTimeoutDemo
