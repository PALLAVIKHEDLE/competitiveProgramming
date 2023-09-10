/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
    let map1={}, map2={}, result=[],fArray=[], sArray=[], duplicates=[]
    for(let i=0;i<nums1.length;i++){
        let val=map1[nums1[i]]
        if(val==undefined)map1[nums1[i]]=1
    }
    for(let j=0;j<nums2.length;j++){
        if(map1[nums2[j]]==undefined)map2[nums2[j]]=1
        else duplicates.push(nums2[j])
    
        for(let i=0; i<duplicates.length;i++)if(j==nums2.length-1) delete map1[duplicates[i]]     
    }
    for (key in map1)fArray.push(key)

    for (key in map2)sArray.push(key)
// console.log('arrays',fArray,sArray)
result.push(fArray,sArray)
return result
};