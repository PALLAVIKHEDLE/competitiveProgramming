/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function(nums, k) {
    // Calculate XOR of all elements in the array
    let xorAll = 0;
    for (let num of nums) {
        xorAll ^= num;
    console.log(xorAll,'All')

    }
    // Calculate XOR of target value and xorAll
    let target = xorAll ^ k;
    console.log(target,'trgt')

    //  Count the number of set bits in target
    let count = 0;
    while (target > 0) {
        count += target & 1;
        target >>= 1;
    }
    // The count is the minimum number of operations needed
    return count;
};