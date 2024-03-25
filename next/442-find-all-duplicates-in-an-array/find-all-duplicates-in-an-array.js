/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    let map={}, twiceArray=[]
    for(let num of nums){
        map[num]=(map[num]||0)+1
    }
    for(key in map){
        if(map[key]==2)twiceArray.push(key)
    }
    return twiceArray
};