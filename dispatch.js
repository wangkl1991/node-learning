
//1 -- n average to m groups
// var dispatth = function(n, m) {
    
//     var flen = parseInt(n / m) ;
//     var remlen = n - m * flen;
//     var res = [];
//     for (let i = 1; i <= m; i ++) {
//         for (let j = 1; j <= flen; j ++ ){
//             tempArr = [] 
//             res[i] = tempArr.push(j);
//             while (remlen != 0 ){
//                 res[]
//             }
//         }
//         remlen = remlen - 1;
//     }

//         while(remlen == 0){
//             return res 

//         }
// }



var dispatch = function(n, m) {
    let base = Math.floor(n / m) //2
    let extra = n - m * base // 1

    return [...Array(m)].map((v, i) => {
        let hasExtra = i < extra
        let jMax = base + (hasExtra ? 1 : 0)
        let baseNum = i * base + 1 + (hasExtra ? i : extra)
        
        return [...Array(jMax)].map((v, j) => j + baseNum)
    })
}

console.log(dispatch(10, 3))