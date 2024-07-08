/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    if(!nums)return
    k=k%nums.length
    if(k==0)return

    const reverse=((start,end)=>{
        while(start<=end){
            [nums[end], nums[start]]=[nums[start], nums[end]]
            start++
            end--
        }
    })
    reverse(0, nums.length-1)
    reverse(0, k-1)
    reverse(k, nums.length-1)
};