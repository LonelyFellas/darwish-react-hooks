import React from "react";
const useBattery = () => {
  React.useEffect(() => {
    navigator.getBattery().then(battery => {
      console.log(batter);
      
    })
  }, [])
  return <h1></h1>
}

export default useBattery;