/**
 * @param {number[]} nums
 * @return {number}
 */
var tupleSameProduct = function(nums) {
    const n = nums.length;
    const map = new Map ();
    let same = 0;

    for (let i = 0; i < n; i++) {
        const a = nums[i];

        for (let j = i + 1; j < n; j++) {
            const b = nums[j];
            
            const product = a * b;
            const pairs = (map.get(product) || 0);

            same += pairs * 8;

            map.set(product, pairs + 1);
        }
    }

    return same;
};