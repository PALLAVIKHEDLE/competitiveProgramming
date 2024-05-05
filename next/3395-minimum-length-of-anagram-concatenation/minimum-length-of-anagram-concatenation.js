/**
 * @param {string} s
 * @return {number}
 */
var minAnagramLength = function(s) {
    if(s.length==0 || !s)return 0;
    let map={}, maxDivisor=1;
    
    for (let char of s) map[char] = (map[char] || 0) + 1;

   let uniqueChars = Object.keys(map);
   let min=Math.min(...Object.values(map));

   for(let i=1;i<=min;i++){
        if(min%1!==0)continue
        let d1=i, d2=min/i;
        if(uniqueChars.every(k=>map[k]%d1==0))maxDivisor=Math.max(maxDivisor,d1)
        if(uniqueChars.every(k=>map[k]%d1==0))maxDivisor=Math.max(maxDivisor,d1)
   }

    return s.length / maxDivisor

};