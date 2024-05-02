/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
   let start=0; i=1;
   while(i<nums.length){
      if(nums[start]!==0)start++
      if(nums[start]==0 && nums[i]!==0){
        nums[start]=nums[i]
        nums[i]=0
        start++
      }
      i++;
   }
 
};