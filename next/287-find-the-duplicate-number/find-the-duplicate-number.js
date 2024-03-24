/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
      const map={}
  
  for(let i=0; i<nums.length;i++){
    let val=map[nums[i]]
    if(val==undefined) map[nums[i]]=1
    else  return nums[i]
  }
};