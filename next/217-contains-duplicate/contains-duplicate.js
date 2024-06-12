/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let map={}
    for(let i=0; i<nums.length; i++){
        map[nums[i]]=(map[nums[i]]|0)+1
    }
    for(key in map){
        console.log(map[key],key, 'map')
        if(map[key]>1)return true
    }
 return false   
};