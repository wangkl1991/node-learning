const longestPrefix = (strings) => {
   if (strings == null || strings.length == 0) return "";
    var minLen = 999999;
    for(let i = 0; i < strings.length; i ++) {
        let str = strings[i];
        if(str.length < minLen) minlen = str.length;
    }
    if(minlen == 0) return "";

    for (let j = 0; j< minlen; j++) {
        let prev = "0";
        for (let k = 0; k < strings.length; k++) {
            if(k == 0) {
                prev = strings[k].charAt(j);
                console.log(prev)
            }
            if(strings[k].charAt(j) != prev) {
                console.log("asd")
                return strings[k].substring(0, j);
            }
        }
    }
    return strings[0].substirng(0, minlen)

}


console.log(longestPrefix(["abaa", "abab", "abac"]))


//O(n) = n*n 