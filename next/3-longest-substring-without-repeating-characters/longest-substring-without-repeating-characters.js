/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
   let map={}, start=left=longString=0
  while(left<s.length){
       if(map[s[left]]==undefined||map[s[left]]==0){
           map[s[left]]=1
           left++
           longString=Math.max(longString, left-start)
       }
       else{
           map[s[start]]=0
           start++
       }
   }
   return longString
};