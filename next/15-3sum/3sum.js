/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// var threeSum = function(nums) {
//   let start=0, end=0, sum=0, map={}, temp=[], conStr=''
//   while(start<nums.length){
//       console.log('index', start, end, sum)
//        sum+=nums[start]
//        temp.push(nums[start])
//     while(temp.length==3){
         
//         if(sum==0 && temp.length==3){
//           temp.sort((a,b)=>a-b)
//           conStr=temp.join('')
//            if(map[conStr]==undefined)map[conStr]=1
//            else map[conStr]=map[conStr]+1    
//         }
//          sum-=nums[end]  
//           temp.shift()
//         end++
//     }
//          start++
//   } 
//         console.log('map', conStr, map, temp)

// };

var threeSum = function(nums) {
  nums.sort((a, b) => a - b);
  const result = [];

  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    

    let left = i + 1, right = nums.length - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];

      if (sum === 0) {
        result.push([nums[i], nums[left], nums[right]]);
        
        // Skip duplicate values for the second element of the triplet
        while (left < right && nums[left] === nums[left + 1])left++;
        

        // Skip duplicate values for the third element of the triplet
        while (left < right && nums[right] === nums[right - 1]) right--;
        

        left++;
        right--;
      } else if (sum < 0) left++;
       else right--;    
    }
  }

  return result;
};