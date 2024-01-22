/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElements = function(arr, k, x) {
    let left=0, right=arr.length-1
    while(right-left>=k){
        if(Math.abs(arr[left]-x)<=Math.abs(arr[right]-x))right--
        else left++
    }
    return arr.slice(left, right+1)
//     let result=[], diffsWithIndices=[]
//     for(let i=0; i<arr.length;i++){
//         let diff=Math.abs(x-arr[i])
//         diffsWithIndices.push({diff, index:i})
//     }
//     diffsWithIndices.sort((a,b)=>a.diff-b.diff)

//     for(let j=0; j<k;j++)result.push(arr[diffsWithIndices[j].index])
//     result.sort((a,b)=>a-b)

//   return result  
};