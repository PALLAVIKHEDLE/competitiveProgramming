/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElements = function(arr, k, x) {
// let start=0, end=arr.length-1
// while(end-start>=k){
//     if(Math.abs(arr[start]-x)<=Math.abs(arr[end]-x))end--
//     else start++
// }
// return arr.slice(start, end+1)

let result=[], diffsWithIndices=[]
for(let i=0; i<arr.length;i++){
    let diff=Math.abs(x-arr[i])
    diffsWithIndices.push({diff, index:i})
}
diffsWithIndices.sort((a,b)=>a.diff-b.diff)
for(let j=0; j<k; j++) result.push(arr[diffsWithIndices[j].index])
result.sort((a,b)=>a-b)
return result
};
