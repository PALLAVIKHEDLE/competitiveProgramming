/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function(nums) {
    let map={}, sum=0
    for(let i=0; i<nums.length;i++){
        if(map[nums[i]]==undefined) map[nums[i]]=1
        else  map[nums[i]]=map[nums[i]]+1
    }
    for(key in map){
        if(map[key]==1){
            sum+=Number(key)
        }
 
    }

 return sum   
};