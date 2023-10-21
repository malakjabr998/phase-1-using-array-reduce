const batteryBatches = [4, 5, 3, 4, 4, 6, 5];
const totalBatteries = batteryBatches.reduce(function(acc , element){return element+acc}, 0)
console.log(totalBatteries)
// Code your solution here
