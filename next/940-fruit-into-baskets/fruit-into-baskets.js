/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function(fruits) {
 let map={}, sum=maxSum=start=0
 for(let i=0; i<fruits.length; i++){
     if(map[fruits[i]]==undefined)map[fruits[i]]=1
     else map[fruits[i]]=map[fruits[i]]+1
 
 while (Object.keys(map).length > 2) {
      map[fruits[start]] -= 1;
      if (map[fruits[start]] === 0) {
        delete map[fruits[start]];
      }
      start += 1;
    }

    sum = i - start + 1;
    maxSum = Math.max(maxSum, sum);
  
}
  return maxSum;

};