const coalesce = (...args) => {console.log(args.find(_ => ![undefined, null].includes(_)))};

coalesce(null, undefined, NaN, '');
