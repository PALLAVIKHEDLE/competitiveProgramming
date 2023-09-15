/**
 * @param {number[]} nums
 * @return {number}
 */
var maxArrayValue = function(nums) {
    let top=nums[nums.length-1], sum=top
    for(let i=nums.length-2; i>=0;i--){
        sum=nums[i]>sum?nums[i]:sum+nums[i]
        top=Math.max(sum,top)
    }
  return top
};