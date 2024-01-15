/**
 * @param {number[]} cards
 * @return {number}
 */
var minimumCardPickup = function(cards) {
    let map={}, ans=Infinity
    
    for(let i=0;i<cards.length;i++){
        //if value has been encountered before, it calculate difference b/w current index and last index where card was encountered
        if(map[cards[i]]!==undefined)ans=Math.min(ans, i-map[cards[i]]+1)

        map[cards[i]]=i
    }

 return ans==Infinity?-1:ans
};