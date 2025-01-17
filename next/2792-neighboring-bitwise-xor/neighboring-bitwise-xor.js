/**
 * @param {number[]} derived
 * @return {boolean}
 */
var doesValidArrayExist = function(derived) {
    let ans = 0;
    for (const num of derived) {
        ans ^= num;
    }
    return ans === 0;
};