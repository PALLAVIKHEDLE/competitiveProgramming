/**
 * @param {number} n
 * @param {number} k
 * @param {number} target
 * @return {number}
 */
var numRollsToTarget = function(n, k, target) {
  const mod=1e9+7
  let map={}
  return findWays(n,0) 

  function findWays(diceLeft, sum){
      if(diceLeft==0)return sum==target?1:0
      if (sum > target) return 0;
      //This generates a unique key based on the current state (diceLeft and sum) and checks if the result for this state is already memoized. If it is, the memoized result is returned.
      const key=`${diceLeft}#${sum}`
      //# as a separator is to create a unique string
      if(map.hasOwnProperty(key)) return map[key]
      let count=0
      for(let face=1; face<=k; face++){
          count=(count+findWays(diceLeft-1,sum+face))%mod
      }
    map[key]=count
    return count  
  }  
};