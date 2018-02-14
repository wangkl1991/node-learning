const countOccurrences = (arr, val) => arr.reduce((a, v) => (v === val ? a + 1 : a + 0), 0);


// const countOccurrences = function (arr, val) {
//     var res =0;
//     arr.forEach(function(v,i) {
//             if(v == val )  res = res + 1;
//     });
//     return res;
// }



console.log(countOccurrences([1, 1, 2, 1, 2, 3], 1));