const pipeFunction = (...fns) => fns.reduce((f,g)=> (...args) => g(f(...args)));


const addFive = x => x + 5;
const mul2 = x => x * 2;

const muladd = pipeFunction(mul2, addFive);
console.log(muladd(2));