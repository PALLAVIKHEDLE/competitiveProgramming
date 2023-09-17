/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraysDivByK = function(nums, k) {
    let map = { 0: 1 };
    let rs = 0;
    let ans = 0;

    for (let num of nums) { // Add 'let' to declare num
        rs += num;
        let key = rs % k;

        if (key < 0) key += k; // Handle negative remainders

        if (key in map) {
            ans += map[key];
            map[key] += 1;
        } else {
            map[key] = 1;
        }
    }

    return ans;
};