/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numberOfSubarrays = function(nums, k) {
  let odd = 0, start = 0, count = 0, prefix = 0;
    for(let i = 0; i < nums.length; i++){
        if(nums[i] % 2 !== 0){
            odd++;
            prefix = 0;
        }
        while(odd == k && start <= i){
            if(nums[start] % 2 !== 0) odd--;
            start++;
            prefix++;
        }
        count += prefix;
    }
    return count; 
};