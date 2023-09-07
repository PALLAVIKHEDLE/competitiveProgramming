/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

var threeSumClosest = function(nums, target) {
nums.sort((a,b)=>a-b)

  const {length}=nums
  let result=nums[0]+nums[1]+nums[2]

  for(let i=0; i<length-1; i++){
      if(i>0&& nums[i]==nums[i-1]) continue// duplication 
     let start=i+1
     let end=length-1
      while(start<end){
         let sum=nums[i]+nums[start]+nums[end]
          if(sum<target){
              start++
          }else if(sum>target){
              end--
          }else return sum
      if (Math.abs(sum - target) < Math.abs(result - target)) result = sum;
      }
  }
  return result;
};