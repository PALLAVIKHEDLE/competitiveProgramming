/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let max = 0, subString = '';
    for(let i=0;i<s.length;i++){
        if(!subString.includes(s[i])) subString+=s[i];
        else{
            max = Math.max(max,subString.length);
            let index = subString.indexOf(s[i])
            subString = subString.slice(index+1,subString.length)+s[i];
        }
    }
    max = Math.max(max,subString.length);
    return max;
};