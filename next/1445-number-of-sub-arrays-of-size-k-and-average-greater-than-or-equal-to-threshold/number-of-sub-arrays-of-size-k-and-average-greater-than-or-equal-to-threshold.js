/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} threshold
 * @return {number}
 */
var numOfSubarrays = function(arr, k, threshold) {
  let i=start=0, sum=count=0
  while(i<arr.length){
    sum+=arr[i]
    while(i-start+1>k)sum-=arr[start++]
    if(i-start+1==k && sum/k>=threshold)count++
    i++
  }
  return count
};