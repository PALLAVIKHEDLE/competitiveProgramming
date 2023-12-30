/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
 let target=nums.length-1, max=0, index=0
 while(index<nums.length){
     max=Math.max(max, index+nums[index])
    if(max>=target)return true
    if(max<=index && nums[index]==0)return false

    index++
 } 
return false
};