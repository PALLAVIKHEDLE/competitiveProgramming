/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
 function min(a, b){
  if(a<b)return a;
  return b;
}
var minSubArrayLen = function(target, nums) {
  let minWindow=Number.MAX_SAFE_INTEGER
  let sum=0, start=0, currentWindowLen
  for(let i=0; i<nums.length;i++){
      sum+=nums[i]
    while(sum>=target){
        currentWindowLen=i-start+1
        minWindow=Math.min(minWindow,currentWindowLen)
        sum=sum-nums[start]
        start++
        
    }
  }
      if(currentWindowLen==undefined)return 0    
  
  return minWindow
};