/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    this.sums = [];
    var sum = 0;
    for (var i = 0; i < nums.length; i++) {
        sum += nums[i];
        this.sums.push(sum);
    }
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function(left, right) {
     return this.sums[right] - (left > 0 ? this.sums[left - 1] : 0);
};

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */