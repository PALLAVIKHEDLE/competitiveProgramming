/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
  let {length}=nums, leftSum=rightSum=0, index=-1
    for(let i=0; i<length;i++)leftSum+=nums[i]

    for(let j=length-1;j>=0;j--){
        leftSum-=nums[j]
        if(rightSum==leftSum)index=j
        rightSum+=nums[j]
    }
return index
};