/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
     let map = {};
    
    for (let i = 0; i < ransomNote.length; i++) {
        map[ransomNote[i]] == undefined ? map[ransomNote[i]] = 1 : map[ransomNote[i]]++;
    }

    for (let i = 0; i < magazine.length; i++) {
        if (map[magazine[i]] && map[magazine[i]] > 0) {
            map[magazine[i]]--;
        }
    }

    for (let key in map) {
        if (map[key] > 0)return false;
        
    }

    return true; 
};