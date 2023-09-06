/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    nums.sort((a,b)=>a-b)
    let missingNumber=[]
    const map={}
   for(let i=0;i<nums.length;i++){
       let val=map[nums[i]]
       if(val==undefined)map[nums[i]]=1
   } 
   
    for(let i=1; i<=nums.length;i++){
        if(map[i]==undefined) missingNumber.push(i)
    }
    return missingNumber
};