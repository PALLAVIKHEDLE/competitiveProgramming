/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    let minWindow=Number.MAX_SAFE_INTEGER, currWindow='', map={}, start=end=0;

    for(let str of t){
        if(map[str]==undefined)map[str]=1
        else map[str]++
    }
    let count=Object.keys(map).length
    while(end<s.length){
        for(key in map){
            if(s[end]==key){
                map[key]--
                if(map[key]==0)count--
            }
        }
        end++

        while(count==0){
            if(end-start+1<minWindow){
                minWindow=end-start+1
                currWindow=s.slice(start,end)
            }

            for(key in map){
                if(s[start]==key)map[key]++
                if(map[key]>0)count++
            }
            start++
        }
    }
    
return currWindow
};