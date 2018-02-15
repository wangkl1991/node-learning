// const over = (...fns) => (...args) => fns.map(fn => fn.apply(null, args));

const over = function(...fns) {
       return function(...args) {
           let arr = [];
           fns.map(function(fn) {
           arr.push(fn.apply(null, args)) 
           })
           return arr;
       }
}

const minMax = over(Math.min, Math.max);


console.log(minMax(1,2,3,4,5))


