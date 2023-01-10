import React from "react";
import { } from ""
const useBattery = () => {
  React.useEffect(() => {
    (<Navigator>navigator).getBattery().then(battery => {
      console.log(battery);
      
    })
  }, [])
  return <h1></h1>
}

export default useBattery;