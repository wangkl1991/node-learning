/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */

const removeKdigits = (num, k) => {
    let min = 9999999999;
    let temp = ""
    for (let i = 0; i < num.length; i++) {
        temp = num.replace(num.charAt(i), '')
        min = Number(temp) < min ? Number(temp) : min
        console.log(min);
    }
    return min;
}

console.log(removeKdigits('12312', 1));
