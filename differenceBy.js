const differenceBy = (arrA, arrB, fn) => {
    const s = new Set(arrB.map(v => fn(v)));
    return arrA.filter(x => !s.has(fn(x)))
}


console.log(differenceBy([2.1, 1.2], [2.3, 2.4], Math.floor)) 
