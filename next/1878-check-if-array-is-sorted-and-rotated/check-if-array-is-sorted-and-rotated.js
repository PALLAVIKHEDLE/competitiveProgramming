/**
 * @param {number[]} nums
 * @return {boolean}
 */
var check = function(nums) {
    let {length}=nums, count =0;
    if(nums[0]<nums[length-1])count++

    for(let i=0; i<length-1; i++){
        if(nums[i]>nums[i+1])count++

        if(count>1)return false
    }
    return true
};