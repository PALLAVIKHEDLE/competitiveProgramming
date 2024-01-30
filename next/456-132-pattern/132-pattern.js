/**
 * @param {number[]} nums
 * @return {boolean}
 */
var find132pattern = function(nums) {
   let min=Number.MIN_SAFE_INTEGER, stack=[]
   for(let i=nums.length-1; i>=0; i--){
       while(nums[i]>stack[stack.length-1])min=stack.pop()

       if(nums[i]<min)return true
       stack.push(nums[i])
   }
   return false
};