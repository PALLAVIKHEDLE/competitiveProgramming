/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
//     let map={}
//    for(let i=0; i<nums.length;i++){
//     let requiredNum=target-nums[i]
//     if(map[requiredNum]!==undefined)return [map[requiredNum],i]
//     map[nums[i]]=i
//    }
//    for(let i=0; i<nums.length;i++){
//     let requiredNum=target-nums[i]
//     let index = nums.indexOf(requiredNum);
//        if(index !== -1 && index !== i) return [i, index];
//        else requiredNum=0
//    }

for(let i=0; i<=nums.length;i++){
    for(let j=i+1; j<nums.length;j++){
        if(target==nums[i]+nums[j])return[i,j]
    }
}
};