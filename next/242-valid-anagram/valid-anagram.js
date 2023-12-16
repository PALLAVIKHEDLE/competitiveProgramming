/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let map={}
     if (s.length !== t.length) return false; // If lengths are different, they can't be anagrams

    for(const ele of s){
        if(map[ele]==undefined)map[ele]=1
        else map[ele]=map[ele]+1
    }
    for(const sec of t){
        if(map[sec])map[sec]--
        else return false
    }

return true    
};