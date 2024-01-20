/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number}
 */
var maxScore = function(nums1, nums2, k) {
    let result=0, totalSum=0;
    //A min Priority Queue, where elements are object with a priority value equal to the array element's value
    let heap= new MinPriorityQueue({priority:(element)=>element})
    //create a new array by pairing elements from nums1 and nums2 at corresponding indices.
    let mergedArray=nums1.map((nums1Val,i)=>[nums2[i], nums1Val])
    //sort merged array in descending order based on the values.
    mergedArray.sort((a,b)=>b[0]-a[0])

    for( let [max, num1Val] of mergedArray){
        if(heap.size()==k)totalSum-=heap.dequeue().element

        totalSum+=num1Val
        heap.enqueue(num1Val)

        if(heap.size()==k) result=Math.max(result, totalSum*max)
    }
return result
};
