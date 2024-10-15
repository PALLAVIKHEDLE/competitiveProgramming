/**
 * @param {string} s
 * @return {number}
 */
var minimumSteps = function(s) {
    let ans = 0;
    let blackCount = 0; // Tracks the number of black balls (1s)

    // Traverse through the string
    for (let i = 0; i < s.length; i++) {
        // White ball encountered, add the number of black balls on its left
        if (s[i] === '0') ans += blackCount;
        else blackCount++; // Black ball encountered, increment the black ball count
    }
return ans;
};