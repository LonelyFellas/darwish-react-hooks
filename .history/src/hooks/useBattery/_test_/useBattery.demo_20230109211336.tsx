import useBattery from "..";
const UseBattery = () => {
  const batteryState = useBattery()
  return (
    <div>
    <strong>Battery sensor</strong>:&nbsp;&nbsp; <span>supported</span> <br />
    <strong>Battery state</strong>: <span>fetched</span> <br />
    <strong>Charge level</strong>:&nbsp;&nbsp; <span>{ (batteryState.level * 100).toFixed(0) }%</span> <br />
    <strong>Charging</strong>:&nbsp;&nbsp; <span>{ batteryState.charging ? 'yes' : 'no' }</span> <br />
    <strong>Charging time</strong>:&nbsp;&nbsp;
    <span>{ batteryState.chargingTime ? batteryState.chargingTime : 'finished' }</span> <br />
    <strong>Discharging time</strong>:&nbsp;&nbsp; <span>{ batteryState.dischargingTime }</span>
  </div>
  )
}

export default Demo;