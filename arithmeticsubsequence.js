var arisequence = function(arr) {
    if(arr == null|| arr.length < 3) return 0;
    var temp = {};   
    arr.sort((a,b) => a-b);
    return arr;
}

console.log(arisequence([2,4,6,8,10]), '')  