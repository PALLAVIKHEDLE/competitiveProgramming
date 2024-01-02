/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let result=[]
    for(let i=0; i<nums.length;i++){
        if(nums[i]==target){
            result.push(i)
            break
        }
    }
    for(let i=nums.length; i>=0;i--){
        if(nums[i]==target){
            result.push(i)
            break
        }
    }
    if(result.length)return result
    else return[-1,-1]
    // return result
};