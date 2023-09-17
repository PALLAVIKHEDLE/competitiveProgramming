/**
 * @param {number[]} nums
 * @return {boolean}
 */
var divideArray = function(nums) {
    let map={}
    for(let i=0;i<nums.length;i++){
        let val=map[nums[i]]
        if(val==undefined)map[nums[i]]=1
        else map[nums[i]]=val+1
    }
     // Check if all elements meet the conditions
    for (key in map) {
        if (nums.length % 2 == 0 && map[key] % 2 != 0) return false;
        else if (nums.length % 2 != 0 && map[key] % 2 != 0) return false;
    }
    
    return true;
};