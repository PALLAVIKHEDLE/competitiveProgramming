/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let start = 0; end = nums.length-1;
    while(start<=end){
        if (nums[start]==val){
            nums[start] = nums[end];
            end--;
        }else start++;
    }
return start;
};