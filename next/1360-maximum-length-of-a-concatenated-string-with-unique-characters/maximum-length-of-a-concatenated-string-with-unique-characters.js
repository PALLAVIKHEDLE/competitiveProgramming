/**
 * @param {string[]} arr
 * @return {number}
 */
var maxLength = function(arr) {
    let maxLen=0
  function isUnique(subseq) {
        const map = {};
        for (let char of subseq) {
            if (map[char]) return false;//if it has unique characters.
            map[char] = true;
        }
        return true;
    }

    function backtrack(start, curr) {
        if (!isUnique(curr))return;
        maxLen = Math.max(maxLen, curr.length);

        for (let i = start; i < arr.length; i++) {
            backtrack(i + 1, curr + arr[i]);
        }
    }

    backtrack(0, '');

    return maxLen;
};