/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(nums, k) {
  let start=end=count=0, maxOnes=Number.MIN_SAFE_INTEGER
  while(start<nums.length){
      if(nums[start]==0)count++
      while(count>k){
          if(nums[end]==0)count--
          end++
      }
        maxOnes=Math.max(maxOnes,start-end+1)
   start++   
  }
  return maxOnes
};