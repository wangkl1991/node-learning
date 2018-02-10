var palindrome = function (x) {
    // x.forEach(el=> {console.log(el)}
    // )
    if(x < 0 )return false;
    x = x.toString()
    var arr = [];
    for (let i = 0; i < x.length; i ++) {
        arr[i] = x.charAt(i);
    }    
    console.log(arr);
    for (let j = 0; j < arr.length; j++) {
        if (arr[j] !== arr[arr.length - j -1]) {
            return false;
        }
    }
    return true;

}

console.log(palindrome(1899449981));
