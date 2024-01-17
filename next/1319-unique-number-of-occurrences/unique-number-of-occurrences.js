/**
 * @param {number[]} arr
 * @return {boolean}
 */
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    let map={}
    for(let val of arr){
        map[val]==undefined?map[val]=1:map[val]++
    }
    let occurrencesMap={}
    for(key in map){
       if(occurrencesMap[map[key]])return false
       else occurrencesMap[map[key]]=true
    }
return true
};
