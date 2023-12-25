/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
 let memo = {};

    function recursiveDecode(index) {
        if (index === s.length) return 1;
        
        if (s[index] === '0') return 0;
        
        if (memo[index] !== undefined)return memo[index];
        

        let ways = recursiveDecode(index + 1);

        if (index + 1 < s.length && parseInt(s.substring(index, index + 2)) <= 26) {
            ways += recursiveDecode(index + 2);
        }

        memo[index] = ways;
        return ways;
    }

    return recursiveDecode(0);   
};