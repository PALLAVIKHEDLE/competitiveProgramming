/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    //MERGE SORT
    let mid=Math.floor(nums.length/2)
    if(nums.length<=1)return nums
    //Recursion calls
    let left=sortArray(nums.slice(0,mid))
    let right=sortArray(nums.slice(mid))
return mergeSort(left, right)
};

function mergeSort(left, right){
    let sortedArray=[]
    if(left!==undefined && right!==undefined){
        while(left.length && right.length){
            if(left[0]<right[0])sortedArray.push(left.shift())
            else sortedArray.push(right.shift())
        }
    }
return [...sortedArray, ...left, ...right]
}

// var sortArray = function(nums) {
//     //INSERTION SORT
//     for(let i=1;i<nums.length;i++){
//         let key=nums[i]
//         let j=i-1
//         while(j>=0&& nums[j]>key){
//             nums[j+1]=nums[j]
//             j=j-1
//         }
//         nums[j+1]=key
//     }
//     return nums
// }
