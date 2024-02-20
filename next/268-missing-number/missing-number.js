/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
let minVal=0
for(let i=0; i<=nums.length;i++){
    if(nums.includes(minVal))minVal++
    else return minVal
}
};