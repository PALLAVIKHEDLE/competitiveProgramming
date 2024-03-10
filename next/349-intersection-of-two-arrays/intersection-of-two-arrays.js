/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    // let map={}, result=[]
    // for(let num of nums1)map[num]=(map[num]=0)|1
    // for(let number of nums2){
    //     if(map[number]!==undefined)if(!result.includes(number))result.push(number)    
    // }

    // return result
    var value = nums1.filter(x => nums2.includes(x)) // returns intersection of two arrays
    
var remDuplicate  = [...new Set(value)]; //removes duplicates from array

return remDuplicate ;
};