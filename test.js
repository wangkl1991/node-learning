

// function a () {
//     var mvar;
//     console.log(mvar);
//     b();
    
// }
// function b () {
//     var mvar =2;
//     console.log(mvar);
//     var kk =1;
// }

// var mvar = 1;
// console.log(mvar)
// console.log(kk)
// a();



// let dog = {
//     name: 'doggo',
//     sayName() {
//         console.log(this.name);
//     }
// }

// dog.sayName()
// let a =  () => {
//     console.log("this is a ")

// };

// let c =  (cal) => {
//         cal();
//     };
// var findRanks = function (nums) {
//     var sortNums = nums.slice(0).sort(function(a, b) {
//         return b - a;
//     })
//     console.log(sortNums);
//     var sortedNUmsMapping = {};
//     sortNums.forEach(function (num, index) {
//         sortedNUmsMapping[num] = index + 1 + ""
//     })

// }


// findRanks([3,2,1,5,8,9,4]);
// import {a} from('./add');
// console.log(a);
 var fib = function (n) {
     if(n < 0) return;
    var arr = [];
    arr[1] = 1;
    arr[2] = 1;

    for (let i = 3; i < n ;i ++) {
        arr[i]= arr.push(arr[n-1] + arr[n-2]);
    }
    if(n == 1) return 1;
    else if( n ==2 ) return 1;
    else return arr[i];
        
    


 }

