/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    let mapS={}, mapT={}
    if(s.length!==t.length)return false
    for(let i=0; i<s.length;i++){
        if(!mapS[s[i]]&&!mapT[t[i]]){//current characters in s and t have not been mapped yet.
            //mapping from s[i] to t[i] in mapS and from t[i] to s[i] in mapT.
            mapS[s[i]]=t[i]
            mapT[t[i]]=s[i]
        }else if(mapS[s[i]]!==t[i]&& s[i]!==mapT[t[i]])return false
    }
  return true  
};