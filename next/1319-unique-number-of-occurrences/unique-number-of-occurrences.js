/**
 * @param {number[]} arr
 * @return {boolean}
 */
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    let map = {};
    for (let nums of arr) {
        if (map[nums] === undefined) map[nums] = 1;
        else map[nums]++;
    }
    
    let occurrencesMap = {};
    for (let key in map) {
        if (occurrencesMap[map[key]]) return false;
        else occurrencesMap[map[key]] = true;
    }
return true;
};
