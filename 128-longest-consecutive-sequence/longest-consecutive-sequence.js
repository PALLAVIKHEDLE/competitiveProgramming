/**
 * @param {number[]} nums
 * @return {number}
 */
 //First Logic

// var longestConsecutive = function(nums) {
//  const freq={}
//    for(num of nums){
//        freq[num]=1
//    }
//    let currentMax=0
//    for(num of nums){
//        let count=1
//        let numToCheck=num-1
//        while (freq[numToCheck]===1){
//            count ++
//            numToCheck -=1
//        }
//        if(freq[numToCheck]) count+=freq[numToCheck]
//        freq[num]=count
//        currentMax=Math.max(currentMax, count)
//    }
//    return currentMax
// };


// var longestConsecutive = function(nums) {
//   const freq={}
//   for(let i=0;i<nums.length;i++){
//       let val=freq[nums[i]]
//       if(val==undefined) freq[nums[i]]=1
//   }
//   let currentMax=0
//   for(let i=0; i<nums.length;i++){
//       let count=1, numsToCheck=nums[i]-1
//       while(freq[numsToCheck]===1){
//           count++
//           numsToCheck-=1
//       }
//         currentMax=Math.max(currentMax, count)
//   }
// return currentMax  
// }

 
//second Logic
var longestConsecutive = function(nums) {
  if(nums.length==0) return 0
  let count=1, currentMax=1
  let sortArray=nums.sort((a,b)=>a-b)
  for(let i=0;i<sortArray.length;i++){
    if(sortArray[i]-sortArray[i-1]==1){
      count++
      currentMax=Math.max(count,currentMax)
    }else if(sortArray[i]==sortArray[i-1])continue
    else count=1
  }
return currentMax
}