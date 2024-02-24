/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
    let map={}
    for(let char of letters){
        map[char]=(map[char]||0)+1
    }
    for(let key in map){
        if(key>target)return key
    }
  return letters[0]  
};