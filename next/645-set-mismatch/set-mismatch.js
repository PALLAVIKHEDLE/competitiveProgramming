/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
     let map={}, result=[]
     for(let num of nums){
         map[num]=(map[num]||0)+1;
     }
     //find the repeated & mising number 
     for(let key in map){
         if(map[key]>1)result.push(key)//repeated number
     }
     for(let i=1; i<=nums.length;i++){
         if(!map[i]){
             result.push(i)//missing number
             break//break once the missing number is found
         }
     }
return result     
};