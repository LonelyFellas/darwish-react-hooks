import React from "react";
const useBattery = () => {
  React.useEffect(() => {
    navigator.getBattery().then(battery => {
      
    })
  }, [])
  return <h1></h1>
}

export default useBattery;