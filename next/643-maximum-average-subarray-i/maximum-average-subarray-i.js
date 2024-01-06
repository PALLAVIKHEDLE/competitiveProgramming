/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let averageValue=Number.MIN_SAFE_INTEGER,start=sum=0
    for(let i=0;i<nums.length;i++){
        sum+=nums[i]
        if(i-start+1===k){
            averageValue=Math.max(averageValue,sum/k)
            sum-=nums[start]
            start++
        }
    }
return averageValue    
};