/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
var numRescueBoats = function(people, limit) {
    let minBoatCount=0, left=0;
    let sortedArray=people.sort((a,b)=>a-b)
    let right=sortedArray.length-1
   while (left <= right) {
        if (sortedArray[left] + sortedArray[right] <= limit) {
            left++;  
            right--; 
        } else right--;  
        minBoatCount++;
    }
    return minBoatCount;
};