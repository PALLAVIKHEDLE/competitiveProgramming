/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let map={}
    if(s.length!==t.length) return false;

    for(const ele of s)map[ele]=(map[ele]|0)+1
    for(const sec of t){
        if(map[sec])map[sec]--
        else return false
    }
    return true
};