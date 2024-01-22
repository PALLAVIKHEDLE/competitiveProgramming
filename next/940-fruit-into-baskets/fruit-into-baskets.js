/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function(fruits) {
    let map={}, maxLen=start=0
    for(let i=0;i<fruits.length;i++){
        map[fruits[i]]=(map[fruits[i]]||0)+1
    
    while(Object.keys(map).length>2){
        map[fruits[start]]--
        if(map[fruits[start]]==0)delete map[fruits[start]]
        start++
    }
    maxLen=Math.max(maxLen,i-start+1)
    }
return maxLen
};