/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
    nums.sort((a,b)=>`${b}${a}`-`${a}${b}`)//It then subtracts the second string (${a}${b}) from the first string (${b}${a}). JavaScript automatically converts these strings to numbers before performing the subtraction.
    if(nums[0]===0) return '0'

 return nums.join('')   
};