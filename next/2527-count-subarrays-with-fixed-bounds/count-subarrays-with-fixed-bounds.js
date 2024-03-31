/**
 * @param {number[]} nums
 * @param {number} minK
 * @param {number} maxK
 * @return {number}
 */
var countSubarrays = function(nums, minK, maxK) {
 let res = 0;
    let badIdx = -1, leftIdx = -1, rightIdx = -1;

    for (let i = 0; i < nums.length; ++i) {
        // if it falls outside the range [minK, maxK] update badIdx to the index i
        if (!(minK <= nums[i] && nums[i] <= maxK)) badIdx = i;
        //If the current element is equal to minK, update leftIdx to the current index i.
        if (nums[i] === minK) leftIdx = i;
        //If the current element is equal to maxK, update rightIdx to the current index i.
        if (nums[i] === maxK) rightIdx = i;
        
    //This ensures that the subarray contains at least one element from each of minK and maxK, and excludes any elements outside the range.
    res += Math.max(0, Math.min(leftIdx, rightIdx) - badIdx);
    }

    return res;
};