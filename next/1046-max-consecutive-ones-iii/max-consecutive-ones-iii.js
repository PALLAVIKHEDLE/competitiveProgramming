/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(nums, k) {
  let start=count=0,maxOnes=Number.MIN_SAFE_INTEGER
  for(let i=0; i<nums.length; i++){
      if(nums[i]==0)count++
      while(count>k){
          if(nums[start]==0)count--
          start++  
      }
    maxOnes=Math.max(maxOnes,i-start+1)
  }  
 return maxOnes 
};