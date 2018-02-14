// const countBy = (arr, fn) =>
//   arr.map(typeof fn === 'function' ? fn : val => val[fn]).reduce((acc, val) => {
//     acc[val] = (acc[val] || 0) + 1;
//     return acc;
//   }, {});

//   var aaa =countBy([6.1, 4.2, 6.3], Math.floor);
//   console.log(aaa);


// const countBy = (arr, fn) =>arr.map(fn).reduce((acc,val)=> {
//     acc[val] = (acc[val] || 0) + 1;
//     return acc;
    
// },{} )

// console.log(countBy([1.1,2,3, 3],Math.floor));


const countBy = (arr, prop) =>arr.map((val) => val[prop]).reduce((acc, val)=> {
    acc[val] =(acc[val] || 0) + 1;
    return acc;
}, {})

console.log(countBy(['a','ss','sdasd','dddddddd','kk'], 'length'))