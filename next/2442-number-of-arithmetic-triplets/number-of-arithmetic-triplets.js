/**
 * @param {number[]} nums
 * @param {number} diff
 * @return {number}
 */
var arithmeticTriplets = function(nums, diff) {
    let map={}, count=0
    for(let i=0;i<nums.length;i++){
        map[nums[i]]=1
        let temp=nums[i]-diff
        if(map[temp]&&map[temp-diff])count++

        
    }
return count
}