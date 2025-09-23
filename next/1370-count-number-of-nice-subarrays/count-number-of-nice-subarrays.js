/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numberOfSubarrays = function(nums, k) {
    let start=0, odd=0, count=0, prefix=0;
    for(let i=0; i<nums.length; i++){
        if(nums[i]%2!==0){
            odd++
            prefix=0   // Reset prefix (new odd resets subarray count)
        }
        while(odd==k &&start<=i){
            if(nums[start]%2!==0)odd--;
            start++
            prefix++
        }
        count+=prefix
    }
    return count
};