/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxFrequency = function(nums, k) {
    nums.sort((a,b)=>a-b)
    let left=0, curr=0, max=Number.MIN_SAFE_INTEGER
    for(let i=0; i<nums.length;i++){
        curr+=nums[i]
        //curr is the sum of all the numbers less than k which were incremented.
        console.log('win',i-left+1,nums[i]-curr)
        while((i-left+1)*nums[i]-curr>k) curr-=nums[left++]

        max=Math.max(max,i-left+1)
    }
return max    
};