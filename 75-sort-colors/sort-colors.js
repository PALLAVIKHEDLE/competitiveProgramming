/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {

// function swap(i,j){
//     [nums[i],nums[j]]=[nums[j],nums[i]]
// }

// let left=0, right=nums.length-1, i=0
//     while(i<=right){
//         let n=nums[i]
//         if(n===0){
//             swap(i,left)
//             i++
//             left++
//         } else if(n===2){
//             swap(i, right)
//             right--
//         }else i++
//     }


let one=0,zero=0,two=0// maintaining count of 0,1,2
    for(let elem of nums){
        if(elem==0)zero++
        else if(elem==1)one++
        else two++
    }
nums.length=0

     for(let i=0;i<zero;i++) nums.push(0)
    for(let i=0;i<one;i++) nums.push(1)
    for(let i=0;i<two;i++) nums.push(2)    
    return nums

}   