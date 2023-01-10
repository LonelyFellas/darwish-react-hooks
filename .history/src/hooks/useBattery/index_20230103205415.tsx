import React from "react";
const useBattery = () => {
  React.useEffect(() => {
    navigator.getBattery().then(b)
  }, [])
  return <h1></h1>
}

export default useBattery;