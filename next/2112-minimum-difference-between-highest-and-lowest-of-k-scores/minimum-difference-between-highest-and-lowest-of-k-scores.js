/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minimumDifference = function(nums, k) {
    nums.sort((a,b)=>a-b);
    if(k==1)return 0;
    let {length}=nums, diff=Number.MAX_SAFE_INTEGER;
    for(let i=0; i<=length-k;i++)diff=Math.min(diff,nums[i+k-1]-nums[i])

 return diff;   
};