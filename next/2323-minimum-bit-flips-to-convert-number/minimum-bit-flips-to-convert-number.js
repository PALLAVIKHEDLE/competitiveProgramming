/**
 * @param {number} start
 * @param {number} goal
 * @return {number}
 */
var minBitFlips = function(start, goal) {
    // XOR to find differing bits between start and goal
    let xorResult = start ^ goal;
    let count = 0;
    
    // Count the number of 1's in the XOR result
    while (xorResult > 0) {
        count += xorResult & 1;  // Check if the least significant bit is 1
        xorResult >>= 1;         // Right shift to check the next bit
    }
    
    return count;
};