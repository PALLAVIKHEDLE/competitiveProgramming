/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let map={},maxString=start=count=0
       for(let i=0;i<s.length;i++){
           console.log('index',i, start)
           if(map[s[i]]==undefined||map[s[i]]==0){
               map[s[i]]=1
               count++
               maxString=Math.max(maxString, count)
           }else{
               while (start < i && map[s[i]] !== undefined && map[s[i]] > 0) {
                map[s[start]]=0;
                start++;
                count--;
            }
            map[s[i]] = 1;
            count=i-start+1;
           }
       }
       return maxString
};