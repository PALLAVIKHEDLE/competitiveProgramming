/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    let map={}
    for(let str of s){
        if(map[str]==undefined)map[str]=1
        else map[str]++
    }
    let sortedChars = Object.keys(map).sort((a, b) => map[b] - map[a]);
    let result = '';
    for (let char of sortedChars) {
        result += char.repeat(map[char]);
    }
    return result;
};