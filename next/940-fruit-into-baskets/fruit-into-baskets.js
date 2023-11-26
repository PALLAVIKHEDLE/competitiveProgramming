/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function(fruits) {
 let map={}, maxlen=start=0
 for(let i=0; i<fruits.length; i++){
     if(map[fruits[i]]==undefined)map[fruits[i]]=1
     else map[fruits[i]]=map[fruits[i]]+1
 
 while (Object.keys(map).length > 2) {
      map[fruits[start]]--;
      if (map[fruits[start]] === 0)delete map[fruits[start]];
      start++
    }
maxlen = Math.max(maxlen, i - start + 1);
}
  return maxlen;
};