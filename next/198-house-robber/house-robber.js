/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    let evenSum=oddSum=0
    for(let i=0; i<nums.length;i++){
        if(i%2==0)evenSum=Math.max(evenSum+nums[i],oddSum)
        else oddSum=Math.max(oddSum+nums[i],evenSum)
    }
    return Math.max(evenSum, oddSum)
};