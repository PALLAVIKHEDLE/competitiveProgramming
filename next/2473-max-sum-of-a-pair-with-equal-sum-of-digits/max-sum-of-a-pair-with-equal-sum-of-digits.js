/**
 * @param {number[]} nums
 * @return {number}
 */

const getDigitsSum = (n) => {
    let sum = 0

    while (n > 0) {
        sum += n % 10
        n = Math.floor(n / 10)
    }

    return sum
}

var maximumSum = function (nums) {
    let max = -1
    const map = {}

    for (let i = 0; i < nums.length; i++) {
        const sum = getDigitsSum(nums[i])
        if (sum in map) {
            max = Math.max(max, map[sum] + nums[i])
            map[sum] = Math.max(nums[i], map[sum])
        }
        else {
            map[sum] = nums[i]
        }
    }

    return max
};