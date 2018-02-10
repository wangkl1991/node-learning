var coinsar = function (n) {
    var sum = 0;
    if(n ==0 ) return 0;
 for (let i = 0 ; i <= n; i ++) {
     sum = sum + i;
     console.log(sum);
     while (sum == n) {
         return i;
     };
     while( sum > n) {
         return i - 1;
     }
     
 }    

}

console.log(coinsar(2));
