/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    if(nums.length<4)return []
    nums.sort((a,b)=>a-b)
    let result=[]
    for(let i=0; i<nums.length;i++){
          // Skip duplicates for the first pointer
        if(nums[i]==nums[i-1])continue//duplicate
        if(nums[i]+nums[i+1]+nums[i+2]+nums[3]>target)break

        for(let j=i+1;j<nums.length;j++){
            // Skip duplicates for the second pointer
            if(j>i+1&& nums[j]==nums[j-1])continue//duplicate
            let left=j+1, right=nums.length-1
            while(left<right){
                let sum=nums[i]+nums[j]+nums[left]+nums[right]
                if(sum==target){
                    result.push([nums[i],nums[j],nums[left],nums[right]])
                    while(left<right && nums[left]==nums[left+1]) left++
                    while(left<right && nums[right]==nums[right-1]) right--
                    left++
                    right--
                }else if(sum<target)left++
                else right--
            }
        }
    }
return result    
};