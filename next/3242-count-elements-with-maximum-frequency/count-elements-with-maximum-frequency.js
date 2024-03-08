/**
 * @param {number[]} nums
 * @return {number}
 */
var maxFrequencyElements = function(nums) {
   let maxFreq = 0, countMaxFreq = 0, map = {};
   for (let num of nums) {
       map[num] = (map[num] || 0) + 1;
       maxFreq = Math.max(maxFreq, map[num]);
   }
   for (let key in map) {
       if (map[key] === maxFreq) countMaxFreq += map[key];
   }  
   return countMaxFreq;
};   