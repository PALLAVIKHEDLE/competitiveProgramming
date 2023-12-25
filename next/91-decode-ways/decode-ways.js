/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
 let memo = {};

    function recursiveDecode(index) {
// Base case: If index reaches the end of the string
        if (index === s.length) return 1;
        if (s[index] === '0') return 0;
// If result for the current index is already calculated, return the memoized value.
        if (memo[index] !== undefined)return memo[index];
        
        let ways = recursiveDecode(index + 1);
        if (index + 1 < s.length && parseInt(s.substring(index, index + 2)) <= 26)ways += recursiveDecode(index + 2);

        memo[index] = ways;
        return ways;
    }

    return recursiveDecode(0);   
};