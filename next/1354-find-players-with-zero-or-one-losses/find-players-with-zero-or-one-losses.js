/**
 * @param {number[][]} matches
 * @return {number[][]}
 */
var findWinners = function(matches) {
 let map={}// store the count of losses for each player

 for(let match of matches){
     if(map[match[0]]==undefined)map[match[0]]=0//Initialize losses for player1
     if(map[match[1]]==undefined)map[match[1]]=0//initialize losses for player2

     if (match[0] !== match[1]) {
      // increment losses only if players are different 
      map[match[1]]++; // increment losses for player 2
    }
 }
 let ans = [[], []];

 for(let [key, value] of Object.entries(map)){
     // count of losses is 0
     if(value==0)ans[0].push(parseInt(key))
     // count of losses is 1
     if (value === 1) ans[1].push(parseInt(key));
 }
 return ans
};