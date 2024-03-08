/**
 * @param {number[]} nums
 * @return {number}
 */
var maxFrequencyElements = function(nums) {
    let maxFreq=countMaxFreq=0, map={}
    for(let num of nums){
        if(map[num]==undefined)map[num]=1
        else map[num]=map[num]+1
    }
     for (let key in map) {
        maxFreq = Math.max(maxFreq, map[key]);
    }
    

    for (let key in map) {
        if (map[key] === maxFreq) {
            countMaxFreq += map[key];
        }
    }
    
    return countMaxFreq;
};