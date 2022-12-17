const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here

// reduce iterates over array
// accumulator variable or callback function, starting element in array by index
const totalBatteries = batteryBatches.reduce(function(batchAggregator, batch) {return batch + batchAggregator}, 0)


console.log(totalBatteries);
