/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    nums.sort((a,b)=>a-b)
    let minVal=1
    for(let i=0; i<nums.length;i++){
        while(nums[i]==minVal){
            if(nums[i]>0)minVal++
        }
    }
    return minVal
};