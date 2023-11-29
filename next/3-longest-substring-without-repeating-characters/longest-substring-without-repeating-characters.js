/**
 * @param {string} s
 * @return {number}
 */


var lengthOfLongestSubstring = function(s) {
    let map = {}, start = end = 0, max = 0;

    while (end < s.length) {
        if (map[s[end]] === undefined || map[s[end]] === 0) {
            map[s[end]] = 1;
            end++;
            max = Math.max(max, end - start);
        } else {
            map[s[start]] = 0; // Reset the count for the character at start index
            start++;
        }
    }

    return max;   
};