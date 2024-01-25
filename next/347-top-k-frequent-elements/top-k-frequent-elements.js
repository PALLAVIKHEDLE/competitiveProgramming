/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
  let map={}, mapArray=[], finalResult=[]
  for(let num of nums)  {
      map[num]=(map[num]||0)+1
  }
  for(key in map)mapArray.push([key, map[key]])
    mapArray.sort((a,b)=>b[1]-a[1])

for(let i=0; i<k;i++)finalResult.push(mapArray[i][0])

return finalResult
};