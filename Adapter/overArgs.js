//TODO

const overArgs = (fn, transforms) => (...args) => fn(...args.map((val, i) => transforms[i](val)));

const double = x=> x*2;
const square = x=> x*x;

const fn = overArgs((x, y) => [x, y], [square, double]);


console.log(fn(2,3));