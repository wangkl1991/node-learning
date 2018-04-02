const indexOfAll = (arr, v) => {
    let indexes = [];
    arr.forEach((el, i) => el === i &&indexes.push(i)  )
}


console.log(indexOfAll([1,2,3,4,5,6,1] , 1))