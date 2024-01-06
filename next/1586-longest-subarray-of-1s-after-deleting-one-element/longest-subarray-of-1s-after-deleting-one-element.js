/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function(nums) {
    let start=end=0, count=0, ans=Number.MIN_SAFE_INTEGER
    while(start<nums.length){
        if(nums[start]==0)count++
        while(count>1){
            if(nums[end]==0)count--
             end++ 
        }
     ans=Math.max(ans,start-end) 
     start++  

    }
return ans
};