/**
 * @param {string} s
 * @return {number}
 */
var countPalindromicSubsequence = function(s) {
let count = 0,map = {};
    //palindromic subsequences being counted have a length of 3.(s.length-2)
    for (let i = 0; i < s.length - 2; i++) {
        if(!map[s[i]]) {
            map[s[i]] = true;
            const lastIndex = s.lastIndexOf(s[i]);
            if(lastIndex === i) continue;
            
            let uniqueChars = {};
            for(let j = i+1; j < lastIndex; j++)uniqueChars[s[j]] = true;
            
            count += Object.keys(uniqueChars).length;
        }
    }

    return count;   
};
