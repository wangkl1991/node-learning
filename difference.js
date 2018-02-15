const difference = (arrA, arrB) => {
    const s = new Set(arrB);
    return arrA.filter(x=>!s.has(x));
}
console.log(difference([1,2,3],[1,2,4]))

