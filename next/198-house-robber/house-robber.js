/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  let evenAmount=oddAmount=0
  for(let i=0;i<nums.length;i++){
      if(i%2==0)evenAmount=Math.max(evenAmount+nums[i],oddAmount)
      else oddAmount=Math.max(oddAmount+nums[i],evenAmount)
  }
  return Math.max(evenAmount,oddAmount)
};









