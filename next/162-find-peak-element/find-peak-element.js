/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
//     let n=nums.length
//      // Check if there are only two elements
//     if (n === 2) {
//         return nums[0] > nums[1] ? 0 : 1;
//     }
//     for(let i=1;i<nums.length;i++){
//         if(nums[i]>nums[i-1]&&nums[i]>nums[i+1])return i
//     }
// return 0
let maxIndex=0
for(let i=0;i<nums.length;i++){
    if(nums[i]>nums[maxIndex])maxIndex=i
}
return maxIndex
};