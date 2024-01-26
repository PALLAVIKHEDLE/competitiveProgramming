/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let map={},maxString=start=count=0
       for(let i=0;i<s.length;i++){
           if(map[s[i]]==undefined||map[s[i]]==0){
               map[s[i]]=1
               count++
               maxString=Math.max(maxString, count)
           }else{
               // If the current character is repeated
               while (start < i && map[s[i]] !== undefined && map[s[i]] > 0) {
               // Reset the occurrences of characters in the substring
                map[s[start]]=0;
                start++;
                count--;
            }
            map[s[i]] = 1;// Set count to 1 for the current character
            count=i-start+1;// Update the count based on the current substring length
           }
       }
       return maxString
};