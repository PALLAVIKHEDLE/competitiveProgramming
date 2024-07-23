/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function(nums) {
    const freqObj = {};
    nums.forEach(num => {
        freqObj[num] = (freqObj[num] || 0) + 1;
    });

    // Sort the array based on the frequency and then by the value
    nums.sort((a, b) => {
        const freqA = freqObj[a];
        const freqB = freqObj[b];
        if (freqA === freqB) {
            return b - a; // Sort in decreasing order if frequencies are the same
        }
        return freqA - freqB; // Sort in increasing order based on frequency
    });

    return nums;
};