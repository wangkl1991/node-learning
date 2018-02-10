var anagram = function (s, p) {
    var rmap = {};
    for(let k  =0; k < p.length; k ++) {
        if(rmap[p[k]]){
            rmap[p[k]] ++;
        }else{
            rmap[p[k]] = 1;
        }
    }
    console.log(rmap);

    
    var arr = [];
    for (let i = 0; i < s.length  - p.length + 1; i++) {
        for (var j = 0; j < p.length; j++) {
            
        }
        arr[i] = temp;
    }

    return arr;
}

console.log(anagram("ababaab", "ab"))



// //good js code
// var findAnagrams = function(s, p) {
//     let pMap = {};
//     for(let i = 0; i < p.length; ++i) {
//       if (pMap[p[i]]) {
//         pMap[p[i]]++;
//       } else {
//         pMap[p[i]] = 1;
//       }
//     }

//     console.log(pMap);
//     let result = [];
//     let count = p.length;
//     for (let i = 0; i < p.length; ++i) {
//       if (pMap[s[i]] !== undefined && pMap[s[i]]-- > 0) {
//         --count;
//       }
//     }
//     for(let i = 0; i < s.length - p.length + 1; ++i) {
//       if (count === 0) {
//         result.push(i);
//       }
//       if (pMap[s[i]] !== undefined && pMap[s[i]]++ >= 0 ) {
//         ++count;
//       }
//       if (pMap[s[i+p.length]] !== undefined && pMap[s[i+p.length]]-- > 0) {
//         --count;
//       }
//     }
//     return result;
//   }

//   console.log(findAnagrams("ababaab", "ab"))


