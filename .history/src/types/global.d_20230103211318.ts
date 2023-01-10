declare type Battery = {
  charging: boolean
  chargingTime: number
dischargingTime: number
level: number
onchargingchange
: 
null
onchargingtimechange
: 
null
ondischargingtimechange
: 
null
onlevelchange
: 
null
}
declare type Navigator = {
  getBattery: Promise<>
}