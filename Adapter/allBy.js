const allBy = (arr, fn) => arr.every(fn);

const largeThan1 = (x) => x > 1;

console.log(allBy([3,3,2,5,1],largeThan1))