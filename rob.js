var rob = function(nums) {
    nums.unshift(-Infinity);
    const len = nums.length;
    console.log(len);
    console.log(nums);
    if(len == 0) {
        return 0;    
    }else {
        for(let i = 3; i<len; i++){
        nums[i] = nums[i] + Math.max(nums[i-2], nums[i-3]);
        console.log(nums[i])
        }
    }
    
    
    
    return Math.max(nums[len-1], nums[len-2])
};
// var rob = function(nums) {
//     if (nums.length === 0) return 0;
//     nums.unshift(-Infinity);
//     const len = nums.length;
//     for (let i = 3; i < len; i++) {
//       nums[i] += Math.max(nums[i - 2], nums[i - 3]);
//     }
    
//     return Math.max(nums[len - 1], nums[len - 2]);
//   };

console.log(rob([1,2,3,1]))