/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var minSteps = function(s, t) {
    let map1={}, map2={}, count=0
    for(let char of s){
        map1[char]==undefined?map1[char]=1:map1[char]++
    }

    for(let char of t){
        map2[char]==undefined?map2[char]=1:map2[char]++
    }

     for (let key in map2) {
         // there is no corresponding value (undefined), it defaults to 0.
        count += Math.max(0, map2[key] - (map1[key] || 0));
     }
    return count
};