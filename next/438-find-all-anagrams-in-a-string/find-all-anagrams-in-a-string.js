/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    let map={}, start=end=0, result=[],count=p.length

    for(str of p){
        if(map[str]==undefined)map[str]=1
        else map[str]=map[str]+1
    }

    while(end<s.length){
        if(map[s[end]]>0)count--
        map[s[end]]--
        end++
        if(count==0)result.push(start)
        if(end-start==p.length){
            if(map[s[start]]>=0)count++
            map[s[start]]++
            start++
        }
    }
   return result
};