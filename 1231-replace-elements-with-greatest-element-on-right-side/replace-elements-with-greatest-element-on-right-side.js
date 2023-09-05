/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function(arr) {
   let currentMax=arr[arr.length-1]
   arr[arr.length-1]=-1

   for(let i=arr.length-2; i>=0;i--){
       if(currentMax>arr[i]) arr[i]=currentMax
       else[currentMax, arr[i]]=[arr[i],currentMax] 
   }
   return arr
};