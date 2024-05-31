/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
    let map={}, result=[]
    for(let i=0;i<nums.length;i++){
        let val=map[nums[i]]
        if(val==undefined)map[nums[i]]=1
        else map[nums[i]]=val+1
    }
    for(key in map){
        if(map[key]==1)result.push(key)
    }
    return result
};