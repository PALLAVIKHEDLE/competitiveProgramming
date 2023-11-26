/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElements = function(arr, k, x) {
//  let result=[], diffsWithIndices=[];
//     for(let i=0; i<arr.length; i++){
//         let diff=Math.abs(x-arr[i])  
//         diffsWithIndices.push({diff,index:i})
//     }
//     diffsWithIndices.sort((a,b)=>a.diff-b.diff)// Sort by absolute differences

//       // Take the first k elements with the smallest absolute differences
//     for(let j=0; j<k; j++){
//         result.push(arr[diffsWithIndices[j].index])
//     }
//     // Sort the result array to maintain the order
//   result.sort((a, b) => a - b);
//   return result;

  let end=arr.length-1,start=0
    while(end-start>=k){
        if(Math.abs(arr[start]-x)<=Math.abs(arr[end]-x)) end--
        else start++
    }
    return arr.slice(start, end+1)
}