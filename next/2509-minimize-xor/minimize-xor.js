/**
 * @param {number} num1
 * @param {number} num2
 * @return {number}
 */
var minimizeXor = function(num1, num2) {
    let num2Bit1Length = 0;
    // Count the number of 1s in num2 using bitwise operations
    for (let i = num2; i > 0; i >>= 1) {
        if (i & 1) num2Bit1Length++;
    }

    let result = 0;
    let bitPos = 0;

    // First, set bits in result from num1 while matching the 1-bits count in num2
    for (let i = 31; i >= 0; i--) {
        // Check if the i-th bit in num1 is 1
        if ((num1 >> i) & 1) {
            // If there are still 1s left to place, set this bit in result
            if (num2Bit1Length > 0) {
                result |= (1 << i); // Set the i-th bit in result
                num2Bit1Length--;  // Decrease the number of 1s we need to place
            }
        }
    }

    // If there are still 1s left to place, we place them in the lowest bits
    for (let i = 0; num2Bit1Length > 0 && i < 32; i++) {
        if (((result >> i) & 1) === 0) {  // If the i-th bit in result is 0
            result |= (1 << i);  // Set the i-th bit to 1
            num2Bit1Length--;    // Decrease the remaining 1s
        }
    }

    return result;
};