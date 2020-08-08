

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
//  var fib = function (n) {
//      if(n < 0) return;
//     var arr = [];
//     arr[1] = 1;
//     arr[2] = 1;

//     for (let i = 3; i < n ;i ++) {
//         arr[i]= arr.push(arr[n-1] + arr[n-2]);
//     }
//     if(n == 1) return 1;
//     else if( n ==2 ) return 1;
//     else return arr[i];
//  }
// var arr =[1, 2, 3];
// arr.map((v, i, o) => {
//     console.log(v);
//     console.log(i);
//     console.log(o);

// })

// var arr = [1,2,3];
// console.log(arr + 1);
// [...Array(3)].map((v,i) => {console.log(v ,i)} )  


// var testArray = function(m) {
//  return [...Array(m)].map((v, i) => {
//      return [...Array(2)].map((k) => k =1);
//  })   
 
// }

// console.log(testArray(3));

// var a = function() {
   

// }

// a();

// console.log([1,2,3].concat([4,7,5]));

// let ll = ["a" ,"b" ,"c"];
// console.log((ll.indexOf("f")) && (ll.indexOf("a")) );
// console.log(false&&true)

// let ll = ["a","b","c","d"];
// let test = [1,2,3,4,5];
// console.log(test.reduce((acc,v ) => acc = acc + v))
// console.log(ll.reduce((acc, n) => acc.push(n)), [])

// console.log([1,2,3,4,5,6,7].reduce((acc, pre, index, arr) => {
//     if(index > 3) return acc;
//     console.log(arr);
//     return acc + pre;
// },5))


// var flattened = [[0, 1], [2, 3], [4, 5]].reduce((a, b) => 
//      a.concat(b)
//    , [9]);

// var kk = [1,2,3,4,5,6].reduce((a,b)=> a.concat(b), [9] )
//    console.log(kk)
// let a = ["a", "b", "c", "d"];
// let l =[];
//  a.forEach(v => {
    
//     if (v === "a") { l.push(true)} else {
//         l.push(false);
//     }
// })
// console.log(res);
// var promise = new Promise ((resolve, reject) => {
//     setTimeout(() => resolve("sdsds"), 3000)
// });
// console.log("no promise")
// promise.then((data)=>
//         console.log(data)
// )

// console.log([1,2,3,4,5,6,7].reduce((acc, v)=> acc.push(v),[]) )
// let res =[]


// let names = ['wang', 'zhang', 'chen', 'shi','wang'];
// const contedName = names.reduce((allNames, name) => {
//     if(name in allNames) {
//         allNames[name] ++;
//     }else{
//         allNames[name] = 1;
//     }
//     return allNames
// }, {}) 

// console.log(contedName)


// var a =[1,2,3,4,5,6];
// var shita = a.shift();
// console.log(a, shita)

// let set = new Set([1,2,3,2,2])
// console.log(set);
// console.log(typeof(set))

// function hh (callback) {
//     let a = 10;
//     callback(a);

// }
// let a =110
// hh(function(t){
//     console.log("sdsd");
//     console.log(t);
// })

// var dir = "../archives/predictions_20180313.json"
// console.log(dir.split("_")[1].)


// var arr = [
//     {name: 'wkl', age: 12}
// ]

// arr.push({name:'siqi', age: 13})
// console.log(arr);
var ObjectID = require("bson-objectid");
console.log(ObjectID());
var a = ""
{
    value : a;
}