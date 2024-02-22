/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} threshold
 * @return {number}
 */
var numOfSubarrays = function(arr, k, threshold) {
       let start=0,end=arr.length-1,left=0, sum=0,count=0
       while(start<=end){
           sum+=arr[start]
           while(start-left+1>k)sum-=arr[left++]
           if(start-left+1==k && sum/k>=threshold)count++
           start++
       }
  return count     
};







// let start=0, count=0, sum=0
//     for(let i=0; i<arr.length;i++){
//         sum+=arr[i]
//         while(i-start+1>k) sum-=arr[start++]
//         if(i-start+1===k&&sum/k>=threshold)count++
//     }
// return count 