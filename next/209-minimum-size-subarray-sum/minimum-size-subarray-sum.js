/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */

var minSubArrayLen = function(target, nums) {
    let min=Number.MAX_SAFE_INTEGER, sum=0, start=0,end=0, currentWindow
    while(end<nums.length){
        sum+=nums[end]
        while(sum>=target){
            console.log('index', sum, end, start)
            currentWindow=end-start+1
            min=Math.min(min,currentWindow)
            sum-=nums[start]
            start++
        }
        end++
    }
    if(currentWindow==undefined)return 0
return min
};