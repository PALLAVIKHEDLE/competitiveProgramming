/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    if (n <= 0) return false; 

    for (let i = 0; Math.pow(2, i) <= n; i++) {
        if (Math.pow(2, i) === n) return true; 
    }
    
    return false; 
};