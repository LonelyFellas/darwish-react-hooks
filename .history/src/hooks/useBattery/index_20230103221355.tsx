import React from "react";
import { Navigator, Battery } from "../../global";
const useBattery = () => {
  const [battery, setBattery] = React.useState<Battery>({} as Battery);

  React.useEffect(() => {
    const nav = navigator as any as Navigator;
    nav.getBattery().then(bat => {
      setBattery(bat)
    })
    console.log(11);
    
  }, [navigator.c])
  return battery
}

export default useBattery;