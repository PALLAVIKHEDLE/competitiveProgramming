/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let permutations=[]
    const finalArray=(start, nums)=>{
        if(start==nums.length)permutations.push(nums.slice())
        for(let j=start; j<nums.length; j++){
            let temp=nums[start]
            nums[start]=nums[j]
            nums[j]=temp
            finalArray(start+1, nums)
            temp=nums[start]
            nums[start]=nums[j]
            nums[j]=temp
        }
    }
    finalArray(0, nums)
return permutations
};