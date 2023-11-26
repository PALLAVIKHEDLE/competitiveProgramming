/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */

var minSubArrayLen = function(target, nums) {
  let sum=0, end=start=0,min=Number.MAX_SAFE_INTEGER;

  while(start<nums.length){
      console.log('start', start)
      sum+=nums[start]
      while(sum>=target){
        min=Math.min(min, start-end+1)
        sum=sum-nums[end]
        end++
      }
        start++
  }
if(end==0)return 0

return min
};