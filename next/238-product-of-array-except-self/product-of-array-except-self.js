/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let prefix=[], suffix=[], pre=suff=1, {length}=nums
    for(let i=0; i<length;i++){
        let suffixIndex=length-(i+1)//backward
        pre*=nums[i]
        suff*=nums[suffixIndex]
        prefix.push(pre)//[1,2,6,24]
        suffix[suffixIndex]=suff//[24,24,12,4]
    }
    let result=[suffix[1]]//suffix first element
    for(let i=1; i<length-1;i++){
        result.push(prefix[i-1]* suffix[i+1])
    }
    result.push(prefix[length-2])//prefix second last element

return result    
};