/**
 * @param {number[]} nums
 * @return {number}
 */
var largestPerimeter = function(nums) {
    nums.sort((a,b)=>a-b)
    let sum=0,ans=-1
    for(let num of nums){
        if(num<sum)ans=num+sum
        sum+=num
    }
 return ans   
};