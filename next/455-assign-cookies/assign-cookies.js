/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
  let count=index=0
  s.sort((a,b)=>a-b)
  g.sort((a,b)=>a-b)
  while(index<s.length && count<g.length){
   if (s[index] >= g[count])count++;   
    index++;
}
return count  
};