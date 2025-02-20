/**
 * @param {string[]} nums
 * @return {string}
 */
var findDifferentBinaryString = function (nums) {
    return nums.map((num, i) => num[i] === '0' ? '1' : '0').join('');
};