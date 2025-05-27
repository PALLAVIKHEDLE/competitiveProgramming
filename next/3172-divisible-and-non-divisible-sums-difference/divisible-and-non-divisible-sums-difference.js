/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var differenceOfSums = function(n, m) {
    let num1 = 0, num2 = 0;

    for (let i = 1; i <= n; i++) {
        !(i % m) ? num1 += i : num2 += i;
    }
    
    return num2 - num1;
};