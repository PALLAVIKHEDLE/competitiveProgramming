/**
 * @param {string[]} nums
 * @param {number} k
 * @return {string}
 */
// const { PriorityQueue } = require('@datastructures-js/priority-queue');

var kthLargestNumber = function(nums, k) {
    if(nums.length==0)return '0'
    if(nums.length==1)return nums[0]+''
    nums=nums.map(BigInt)
    nums.sort((a,b)=>a-b>=0?-1:1)
    return nums[k-1]+''
//     if(nums.length === 0)
//         return '0';
//     if(nums.length === 1)
//         return nums[0] + '';
//    nums =  nums.map(BigInt);
//     nums.sort((x, y) => x-y >=0 ? -1 : 1);
//     return nums[k-1 ] + '';
};