/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxK = function(nums) {
     let sorted = nums.sort((a, b) => b - a);
    for (let i = 0; i < sorted.length; i++) {
        if (sorted.includes(-sorted[i])) return sorted[i]; 
    }
    return -1;   
};