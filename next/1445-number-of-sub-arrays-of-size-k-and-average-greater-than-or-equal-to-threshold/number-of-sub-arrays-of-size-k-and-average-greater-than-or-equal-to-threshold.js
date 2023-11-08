/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} threshold
 * @return {number}
 */
var numOfSubarrays = function(arr, k, threshold) {
  
 let start=0, count=0, average=0;
   for(let i=0; i<arr.length;i++) {
       average+=arr[i] 
       while(i-start+1>k) average-=arr[start++]
       if(i-start+1===k&& average/k>=threshold)count++ 
   }  
return count 
};
