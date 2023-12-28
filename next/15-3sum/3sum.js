/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let result=[];
    nums.sort((a,b)=>a-b)
    for(let i=0; i<nums.length;i++){
        let left=i+1,right=nums.length-1
        if(i>0&& nums[i]==nums[i-1])continue
        while(left<right){
            let currentSum=nums[i]+nums[left]+nums[right]
            if(currentSum==0){
                result.push([nums[i],nums[left],nums[right]])
                // Skip duplicates for the second element
                while (left < right && nums[left] === nums[left + 1])left++;
                // Skip duplicates for the third element
                while (left < right && nums[right] === nums[right - 1]) right--;
                left++
                right--
            }else if(currentSum<0)left++
            else right--
        }
    }
return result
};