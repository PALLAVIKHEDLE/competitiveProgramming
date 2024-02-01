/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
  let map={}
  for(let num of nums){
      if(map[num]==undefined)map[num]=1
      else map[num]++
  }  
  for(key in map){
      if(map[key]==1)return key
  }
};