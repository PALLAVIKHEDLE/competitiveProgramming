/**
 * @param {string[]} words
 * @return {boolean}
 */
var makeEqual = function(words) {
    let {length}=words, map={}
    for(let word of words){
        for(char of word){//iterates over each character of the current word.
            if(map[char]==undefined)map[char]=1
            else map[char]=map[char]+1
        }
    }

    for(let key of Object.keys(map)){//iterates over each key in the map object.
        if(map[key]%length!=0)return false
    }
return true    
};