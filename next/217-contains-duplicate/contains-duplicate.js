/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
//    let map={}
//    for(let i=0; i<nums.length; i++){
//     let val=map[nums[i]]
//     if(val==undefined)map[nums[i]]=0
//     else map[nums[i]] = val+1;
//    }
//    for(let key in map){
//     if(map[key]>=1)return true
//    }
//    return false
let map={}
for(let i=0; i<nums.length; i++){
    if(map[nums[i]]==undefined)map[nums[i]]=0
    else return true
}
return false
};