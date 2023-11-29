/**
 * @param {string} s
 * @return {number}
 */


var lengthOfLongestSubstring = function(s) {
    let map = {}, start=end =max=0;

    while (end < s.length) {
        // If the character at the end index is not present in the map,
        //If the character at the end index is already present in the map and has a count of 0
        if (map[s[end]] === undefined || map[s[end]] === 0) {
            map[s[end]] = 1;
            end++;
            max = Math.max(max, end - start);
        } else {
            map[s[start]] = 0; 
            start++;
        }
    }

    return max;   
};