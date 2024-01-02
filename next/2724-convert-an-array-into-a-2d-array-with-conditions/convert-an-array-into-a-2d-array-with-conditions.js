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

    // Create an array of arrays ('result') to store the final 2D array
    let result = Array.from({ length: max }, () => []);

    for (let key in map) {
        for (let i = 0; i < map[key]; i++)result[i].push(key)
    }
    return result;
};