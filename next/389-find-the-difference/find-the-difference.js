/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    // let map={}
    // for(let str1 of s){
    //     map[str1]=(map[str1]||0)+1
    // }
    //  for(let i=0; i<t.length;i++){
    //    let val=map[t[i]]
    //    if(val!==undefined)map[t[i]]=val-1
    //    else map[t[i]]=1
    // }
    // for(key in map){
    //     if(map[key]!==0)return key
    // }
s = s.split('').sort();
t = t.split('').sort();

for(let i=0; i<t.length ; i++){
    if(s[i]!==t[i])return t[i]
}

return ""
};