/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    // Check if the array length is 1, return the only element
    if(nums.length==1)return nums[0]
    // Check if the array length is 2, return the minimum of the two elements
    if(nums.length==2)return Math.min(nums[0],nums[1])

    let left=0, right=nums.length-1
    // If the first element is less than the last element, the array is already sorted in ascending order, return the first element
    if(nums[left]<nums[right])return nums[left]
    while(left<=right){
        let mid=Math.floor((left+right)/2)
        if(nums[mid]>nums[mid+1])return nums[mid+1]
        if(nums[mid-1]>nums[mid])return nums[mid]

      // If the left side of the array is sorted, move the `left` pointer to the right side
        if(nums[left]<nums[mid])left=mid+1
        // Otherwise, move the `right` pointer to the left side
        else right=mid-1

    }
 return 0   
};