/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumSum = function(nums) {
    let {length}=nums, minSum=Infinity
    
    for(let j=1; j<length-1;j++){
        let leftMin=nums[0], rightMin=nums[j+1]
        //find the minimum value in the leftSide
        for(let i=0; i<j;i++) if(nums[i]<nums[j])leftMin=Math.min(leftMin, nums[i])         
        //Find the minimum value on the right side
        for(let k=j+1; k<length;k++)if(nums[k]<nums[j])rightMin=Math.min(rightMin, nums[k])         
        if(leftMin<nums[j]&& rightMin<nums[j])minSum=Math.min(minSum,leftMin+nums[j]+ rightMin);
    }
return minSum === Infinity ? -1 : minSum;   
};