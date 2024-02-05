/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let map={},index=-1
    for(let str of s){
          if(map[str]==undefined) map[str]=1
          else map[str]++
    }
    for(key in map){
        if(map[key]==1){
          index =s.indexOf(key)
            break
        }
    }
return index
};