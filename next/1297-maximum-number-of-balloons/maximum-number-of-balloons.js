/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function(text) {
     let map = {'b': 0, 'a': 0, 'l': 0, 'o': 0, 'n': 0};
    
    for (let count of text) {
        if (map[count]!==undefined)map[count]=map[count] + 1;
    }
    // The letter 'l' appears twice in the word, so we need to divide its count by 2
    map['l'] = Math.floor(map['l'] / 2);
    map['o'] = Math.floor(map['o'] / 2);

console.log('map',map)
    // Find the minimum count in the map
    return Math.min(...Object.values(map));
};