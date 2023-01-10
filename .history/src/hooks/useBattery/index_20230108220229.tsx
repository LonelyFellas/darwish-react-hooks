import React from "react";
import { Navigator, Battery } from "../../global";
const useBattery = () => {
  const [battery, setBattery] = React.useState<Battery>({} as Battery);

  React.useEffect(() => {
    window.addEventListener
    const nav = navigator as Navigator;
    nav.getBattery().then(bat => {
      setBattery(bat)
      bat.addEventListener
    })
  }, [])
  return battery
}

export default useBattery;