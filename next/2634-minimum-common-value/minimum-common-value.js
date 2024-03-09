/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var getCommon = function(nums1, nums2) {
    let min=Number.MAX_SAFE_INTEGER,map={}
    for(let one of nums1) map[one]=(map[one]=0)|1
    for(let two of nums2) {
        if(map[two]!==undefined) min=Math.min(two,min)   
    }
return min==Number.MAX_SAFE_INTEGER?-1:min
};