/**
 * @param {number[]} nums
 * @param {number} p
 * @return {number}
 */
var minimizeMax = function(nums, p) {
    if(p==0)return 0//base case
    let n=nums.length-1, low=0
    nums.sort((a,b)=>a-b)
    let high=nums[n]-nums[low]// difference between the maximum and minimum values in nums.
    while(low<high){
        let mid= Math.floor((low+high)/2)
        //check if it is a valid maximum difference.
        //If valid, the high limit is updated to mid; otherwise, the low limit is updated to mid + 1.
        if(isValid(mid))high=mid
        else low=mid+1
    }
    return low
    // checks whether there are at least p pairs in the sorted array nums such that the difference between consecutive elements is less than or equal to max.
    function isValid(max){
        let i=1, pairs=0
        while(i<=n){
            if(nums[i]-nums[i-1]<=max){
                pairs++
                i=i+2
            }else i++

            if(pairs==p)return true
        }
        return false
    }
};