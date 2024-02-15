/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
  let map={}, start=0, maxCharCount=Number.MIN_SAFE_INTEGER, maxLength=0,currWindow
  for(let i=0;i<s.length;i++){
     map[s[i]]=(map[s[i]]||0)+1
    
     maxCharCount=Math.max(maxCharCount, map[s[i]]) 
        while((i-start+1)-maxCharCount>k){
            map[s[start]]--
            start++
        }
  maxLength=Math.max(maxLength,i-start+1)
  }
  return maxLength
};
