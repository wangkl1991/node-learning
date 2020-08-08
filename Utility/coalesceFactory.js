const coalesceFactory = valid => (...args) => args.find(valid);

const myCoalesce = coalesceFactory(_ => ![null, undefined, '', NaN].includes(_));
console.log(myCoalesce(undefined, null, NaN, '', 'wkl'))