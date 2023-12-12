/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let maxproduct1=0,maxproduct2=0
    for(let j=0; j<nums.length;j++){
        if(nums[j]>maxproduct1){
            maxproduct2=maxproduct1
            maxproduct1=nums[j]
        }else if(nums[j]>maxproduct2)maxproduct2=nums[j]
    }
 return (maxproduct1 - 1) * (maxproduct2 - 1);
};

