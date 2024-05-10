/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var kthSmallestPrimeFraction = function(arr, k) {
   let res=[]
    for (let i = 0; i < arr.length; i++) {
        for (let j = i+1; j < arr.length; j++) {
            res.push([arr[i]/arr[j],[arr[i],arr[j]]])
        }
    }
    return res.sort((a,b)=>a[0]-b[0])[k-1][1]
};