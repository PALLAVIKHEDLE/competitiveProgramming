/**
 * @param {number[]} arr
 * @return {boolean}
 */
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
        if (occurrencesMap[map[key]]) {
            // If the count already exists in the map, return false
            return false;
        } else {
            // Otherwise, mark the count as seen in the map
            occurrencesMap[map[key]] = true;
        }
    }

    // If no two counts are the same, return true
    return true;
};
