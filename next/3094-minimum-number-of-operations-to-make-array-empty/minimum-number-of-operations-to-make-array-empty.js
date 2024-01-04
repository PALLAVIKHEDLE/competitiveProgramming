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
    for (let [key, value] of Object.entries(map)) {
        let t = value;
        if (t === 1) return -1;
        count += Math.floor(t / 3);
        if (t % 3 !== 0) count++;
    }
   return count

};