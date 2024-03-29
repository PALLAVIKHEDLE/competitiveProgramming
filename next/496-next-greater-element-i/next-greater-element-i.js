/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    let blankArr = []
    for(let i = 0; i < nums1.length; i++){
        let max = -1;
        for(let j = 0; j < nums2.length; j++){
            let index = j;
            if(nums1[i] == nums2[j]){ 
                while(index !== nums2.length){ 
                    if(nums2[index] > nums1[i]){
                        max = nums2[index]; 
                        break;
                    }
                    index++;
                }
            }
        }
        blankArr.push(max);
    }
        return blankArr;
};