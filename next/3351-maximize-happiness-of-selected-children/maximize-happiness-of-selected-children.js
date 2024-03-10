/**
 * @param {number[]} happiness
 * @param {number} k
 * @return {number}
 */
var maximumHappinessSum = function(happiness, k) {
    happiness.sort((a,b)=>b-a)
    let i = 0 , sum = 0
    while(k-->0){
        sum += Math.max(happiness[i] - i++,0)
    }
    return sum
};