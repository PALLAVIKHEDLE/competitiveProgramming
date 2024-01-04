/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function(nums) {
    let map={}, count=0
    for(let num of nums){
        if(map[num]==undefined)map[num]=1
        else map[num]=map[num]+1
    }
    // for (let [key, value] of Object.entries(map)) {
    for (key in map) {
        let freq=map[key]
        // let freq = value;
        if (freq === 1) return -1;//If the frequency is 1, return -1 
        count += Math.floor(freq / 3);// For every group of three, perform one operation.
        if (freq % 3 !== 0) count++;//If there are remaining elements (1 or 2), perform additional operations.
    }
return count

};