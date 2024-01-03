/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
let left=0, right=nums.length-1, indexVal, firstIndex,lastIndex
    while(left<=right){
        let mid=Math.floor((left+right)/2)
        if(nums[mid]==target){
            indexVal=mid
            break
        }
        else if(nums[mid]>target)right=mid-1
        else left=mid+1
    }
    
    for(let i=indexVal;i>=0;i--)if(nums[i]==target)firstIndex=i
    
    for(let i=indexVal;i<=right;i++)if(nums[i]==target)lastIndex=i

       if (firstIndex === undefined && lastIndex === undefined) {
        firstIndex = -1;
        lastIndex = -1;
       }
return [firstIndex,lastIndex]
};