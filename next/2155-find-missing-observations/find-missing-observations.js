/**
 * @param {number[]} rolls
 * @param {number} mean
 * @param {number} n
 * @return {number[]}
 */
var missingRolls = function(rolls, mean, n) {
    let m= rolls.length,mTotal=0, result=[];
    for(let i=0;i<m;i++)mTotal+=rolls[i]//sum of elements in rolls

// Calculate the total sum needed for n rolls to achieve the desired mean.
    let nTotal=(mean*(n+m))-mTotal
      if(nTotal<n ||nTotal>n*6)return []
      while(nTotal){
         let dice=Math.min(nTotal-n+1,6)//maximum Possible value 
         result.push(dice)
//Subtract the dice value from the total sum & decrement the number of remaining rolls (n).
         nTotal-=dice
         n--
      }  
 return result   
};