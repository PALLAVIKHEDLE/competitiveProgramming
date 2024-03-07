/**
 * @param {number[]} nums
 * @return {boolean}
 */
var find132pattern = function(nums) {
//  let max=Number.MIN_SAFE_INTEGER,stack=[]
//  for(let i=nums.length-1; i>=0;i--){
//      while(nums[i]>stack[stack.length-1])max=stack.pop()
//      if(nums[i]<max) return true
//      stack.push(nums[i])
//  }
//  return false
let stack=[], minCurr=nums[0]
// if(length<3)return false
for(let i=1; i<nums.length;i++){
    while(stack.length && nums[i]>=stack[stack.length-1][0])stack.pop()
    if(stack.length && nums[i] > stack[stack.length-1][1] )  return true;
    stack.push([nums[i],minCurr]);
    minCurr=Math.min(minCurr,nums[i])
}
return false
};
