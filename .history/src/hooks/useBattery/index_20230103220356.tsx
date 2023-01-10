import React from "react";
import { Navigator, Battery } from "../../global";
const useBattery = () => {
  React.useEffect(() => {
    const [battery, setBattery] = React.useState<Battery>();
    const nav = navigator as any as Navigator;
    nav.getBattery().then(battery => {
      console.log(battery);
    })
  }, [])
  return <h1></h1>
}

export default useBattery;