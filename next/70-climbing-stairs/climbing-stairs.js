/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let stairs= [1,2];
    while(stairs.length<n){
        stairs.push(stairs[stairs.length-1]+stairs[stairs.length-2])
    }
return stairs[n-1]
};