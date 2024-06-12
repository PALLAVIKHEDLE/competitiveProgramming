/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
   let map={}
   for(let i=0; i<nums.length;i++){
    let requiredNum=target-nums[i]
    if(map[requiredNum]!==undefined)return [map[requiredNum],i]
    map[nums[i]]=i
   }
};