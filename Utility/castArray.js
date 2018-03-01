// const castArray = (val) => {
//    val = (Array.isArray(val))? val :[val]
//         return val;
// }
const castArray = (val) => Array.isArray(val)? val: [val]

console.log(castArray(5))
console.log(castArray([1,2,3]))