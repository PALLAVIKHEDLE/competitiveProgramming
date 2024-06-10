/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
let start =0, sum=0, min=Number.MAX_SAFE_INTEGER, windowLength=0
for(let i=0;i<nums.length; i++){
    sum+=nums[i]
    while(sum>=target){
        windowLength=i-start+1
        min=Math.min(windowLength,min)
        sum-=nums[start]
        start++
    }
}
 if(windowLength==0)return 0

return min   
};

    