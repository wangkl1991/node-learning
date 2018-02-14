const deepFlatten = (arr) => [].concat(...arr.map((val) => Array.isArray(val)? deepFlatten(val) : val ))


console.log(deepFlatten([1, [2], [[3], 4], 5]))