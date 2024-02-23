/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
 let {length}=s1, start=end=0,map={}
    if(s1.length>s2.length)return false
    for(str of s1){
        map[str]=(map[str]||0)+1
    } 
    while(end<s2.length){
        if(map[s2[end]]>0)length--
        map[s2[end]]--
        end++
        if(length==0)return true
        if(end-start==s1.length){
            if(map[s2[start]]>=0)length++
            map[s2[start]]++
            start++

        }
    }
    return false
};  
