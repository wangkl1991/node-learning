var set = function (arr) {
    var set = new Set();
    arr.forEach((v, i )=> {
        set.add(v);
    })
    

    return set;
}

console.log(set([1,2,3,3,3,5]))