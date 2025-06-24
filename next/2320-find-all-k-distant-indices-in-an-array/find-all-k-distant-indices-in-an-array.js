/**
 * @param {number[]} nums
 * @param {number} key
 * @param {number} k
 * @return {number[]}
 */
var findKDistantIndices = function(nums, key, k) {
    const res=[];
    let min=0; 
    const {length}=nums
    for(let j=0; j<length; j++){
        if(nums[j]===key){
            const l=Math.max(min, j-k)
            min=Math.min(length-1, j+k)+1
            for(let i=l; i<min; i++)res.push(i)
        }
    }
    return res
};