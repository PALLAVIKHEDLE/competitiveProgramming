/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// var isIsomorphic = function(s, t) { 
//   for (let i = 0; i < s.length; i++) {
//         if (s.indexOf(s[i], i + 1) !== t.indexOf(t[i], i + 1)) //checks if the character at index i in string s has the same position (index) in string t.
//             return false;    
//     }
//     return true;
// };

//USING map(More efficient time complexity will be O(n))
var isIsomorphic = function(s, t) { 
  let mapS={},mapT={}
  if(s.length!==t.length)return false
  for(let i=0; i<s.length;i++){
     if(!mapS[s[i]]&&!mapT[t[i]]){//current characters in s and t have not been mapped yet.
         //mapping from s[i] to t[i] in mapS and from t[i] to s[i] in mapT.
         mapS[s[i]]=t[i]
         mapT[t[i]]=s[i]
     }else if(mapS[s[i]]!==t[i]&&mapT[t[i]]!==s[i])return false//it means that there is an existing mapping. Check if the mapping matches the current characters. 
  }
  return true
};