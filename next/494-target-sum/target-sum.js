/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function(nums, target) {
//    let i=0, count=0, sum=0, currentSum=0;
//    while(i<nums.length){
//        for(let j=1; j<nums.length;j++){
//            console.log(nums[i],  nums[j])
//            currentSum += (-nums[i] + nums[j]);
//        }
//        if(currentSum==target)count++
//        i++
//    }
// return count
let count=0
const dp=(i,sum)=>{
    if(i==nums.length){
        if(sum==target)count++
        return;
    }
    dp(i+1, sum+nums[i])
    dp(i+1, sum-nums[i])
}
dp(0,0)
return count
};
