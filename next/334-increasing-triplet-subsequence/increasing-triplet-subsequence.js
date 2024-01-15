/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
   let start=Number.MAX_SAFE_INTEGER, mid=Number.MAX_SAFE_INTEGER
   for(let num of nums){
       if(num<=start)start=num
       else if(num<=mid)mid=num
       else return true
   }
return false   
};