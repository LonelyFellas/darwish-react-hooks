import React from "react";
const useBattery = () => {
  React.useEffect(() => {
    <Navnavigator.getBattery().then(battery => {
      console.log(battery);
      
    })
  }, [])
  return <h1></h1>
}

export default useBattery;