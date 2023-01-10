declare interface Battery {
  charging: boolean
  chargingTime: number
  dischargingTime: number
  level: number
  onchargingchange: null
  onchargingtimechange: null
  ondischargingtimechange: null
  onlevelchange: null
}
declare interface Navigator extends go{
  getBattery: Promise<Battery>
}

export {
  Navigator
}