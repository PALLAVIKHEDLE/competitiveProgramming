/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findMatrix = function(nums) {
   let map = {},max = 0

    for (const num of nums) {
       if(!map[num])map[num]=1
       else map[num]+=1
      max = Math.max(max, map[num])
    }

    let result = Array.from({ length: max }, () => []);

    for (let key in map) {
        let frequency = map[key]
        for (let i = 0; i < frequency; i++) {
            result[i].push(key)
        }
    }
    
    return result;
};