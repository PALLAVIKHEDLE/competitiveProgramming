/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
   nums.sort((a,b)=>a-b)
    let minval=1;
    for (let i=0;i<nums.length;i++){
        while (nums[i]==minval){
            if(nums[i]>0)
            minval++;
        }
    } 
return minval;
};