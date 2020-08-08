var addBinary = function(a, b) {
    let stringArrayA = Array.from(a);
    let stringArrayB = Array.from(b);
    let maxLength = Math.max(stringArrayA.length, stringArrayB.length)
    for (let i = 0; i < maxLength; i++) {
        
    }
    
};
var add = function(a, b) {
    var dec = Number(parseInt(a, 2)) + Number(parseInt(b, 2));
    return dec.toString(2);
}

addBinary('100','1')