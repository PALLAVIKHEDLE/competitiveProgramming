/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let right=s.length, map={},start=max=left=0;
    while(left<right){
        if(map[s[left]]===undefined||map[s[left]]===0){
            map[s[left]]=1
            left++
            max=Math.max(max,left-start)
        }    
        else {
            map[s[start]]=0
            start++
        }
    }
    return max
};