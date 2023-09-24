/**
 * @param {number[]} nums
 * @return {number}
 */
var mostFrequentEven = function(nums) {
    let map={}, evenArr=[]
    for(let i=0; i<nums.length;i++){
        if(nums[i]%2==0) evenArr.push(nums[i])
    }
     for(let j=0; j<evenArr.length;j++){
       if(map[evenArr[j]]==undefined)map[evenArr[j]]=1
         else map[evenArr[j]]=map[evenArr[j]]+1
    }
    
let maxCount = -1, mostFrequentEvenNumber = -1;

    for (let key in map) {
        if (map[key] > maxCount) {
            maxCount = map[key];
            mostFrequentEvenNumber = key;
        }
    }
    return mostFrequentEvenNumber;
};