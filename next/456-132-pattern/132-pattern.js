/**
 * @param {number[]} nums
 * @return {boolean}
 */
var find132pattern = function(nums) {
 let max=Number.MIN_SAFE_INTEGER,stack=[]
 for(let i=nums.length-1; i>=0;i--){
     while(nums[i]>stack[stack.length-1])max=stack.pop()
     if(nums[i]<max) return true
     stack.push(nums[i])
 }
 return false
};