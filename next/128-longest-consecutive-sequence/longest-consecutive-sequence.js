/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    if(nums.length==0)return 0
    nums.sort((a,b)=>a-b)
    let count=1, currentMax=1
    for(let i=1; i<nums.length;i++){
        if(nums[i]-nums[i-1]==1){
            count++
            currentMax=Math.max(currentMax, count)
        }
        else if(nums[i]==nums[i-1])continue
        else count=1
    }
return currentMax
};