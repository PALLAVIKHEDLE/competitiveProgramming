/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
    let low=1, high=Math.max(...piles)
    while(low<high){
        let mid=Math.floor((low+high)/2)
        if(canFinish(piles,mid,h))high=mid
        else low=mid+1
    }
    return low;

};
 function canFinish(piles, mid, h){
     let hoursNeeded=0
     for(let bananas of piles){
         //calculate hours needed for the current pile and add it to total hoursNeeded
         hoursNeeded+=Math.ceil(bananas /mid)
     }
        // Check if total hoursNeeded is less than or equal to available hours h
         return hoursNeeded <= h;
 }