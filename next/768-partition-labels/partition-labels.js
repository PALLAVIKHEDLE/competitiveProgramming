/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function(s) {
   const sizes = [];
    for (let left = 0, right = 0, shift = 0; left < s.length; left++) {
        right = Math.max(right, s.lastIndexOf(s[left]));
        if (left === right) {
            sizes.push(left + 1 - shift);
            shift = left + 1;
        }
    }
    return sizes; 
};