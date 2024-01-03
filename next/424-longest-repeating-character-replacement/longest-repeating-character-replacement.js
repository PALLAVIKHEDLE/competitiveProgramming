/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    let map={}, start=0, maxCharCount=Number.MIN_SAFE_INTEGER,maxLength=0
    for(let i=0; i<s.length;i++){
        if(map[s[i]]==undefined)map[s[i]]=1
        else map[s[i]]++

        maxCharCount=Math.max(maxCharCount,map[s[i]])
        while((i-start+1)-maxCharCount>k){
            map[s[start]]--
            start++
        }
        maxLength=Math.max(maxLength,i-start+1)
    }
  return maxLength
};