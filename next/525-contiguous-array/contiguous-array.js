/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function(nums) {
   let map={}, sum=0, subArrayLength=0

   for(let i=0; i<nums.length;i++){
    sum+=nums[i]===0?-1:1
    if(sum==0)subArrayLength=i+1
    else if(map[sum]!==undefined)subArrayLength= Math.max(subArrayLength, i-map[sum])
    else map[sum]=i
   }
return subArrayLength
};