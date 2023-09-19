/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestEqualSubarray = function(nums, k) {
    let map={},max=0
    //map should contain array of indices of each element
    // [1,2,2,3,2] -> { 1 : [0], 2 : [1,2,4] , 3 : [3] }
    for(let i=0; i<nums.length; i++){
        let val=map[nums[i]]
        if(val==undefined)map[nums[i]]=[i]
        else map[nums[i]].push(i)
    }
   
//coverted map object into Array of entries. each entry will be a two-element array with the element as the first element and the array of indices as the second element.
    let entries= Object.entries(map)
//Iterate through the entries array using for loop with destructing. for each entry, ignore the first element (the element itself) using _,  and use arr to represent arry of indices.
  for(let [_, arr] of entries){
      let left=0, kDuplicate=k
      for(let right=1; right<arr.length; right++){
          let len=arr[right]-arr[right-1]-1
          kDuplicate -=len
//kDuplicate becomes negative, it means that the subarray contains more duplicates than allowed by k.
          if(kDuplicate<0){
             max=Math.max(right-left,max)
              while(kDuplicate<0){
                  kDuplicate+=arr[left+1]-arr[left]-1
                  left++
              }
          }
      }
            max=Math.max(arr.length-left,max)
  }
return max
};