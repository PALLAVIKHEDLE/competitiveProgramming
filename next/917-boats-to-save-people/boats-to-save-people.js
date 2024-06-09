/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
var numRescueBoats = function(people, limit) {
  people.sort((a,b)=>a-b);
  let count=0, start=0, end=people.length-1;
  while(start<=end){
    let diff=limit-people[end]
        count++
        end--
        if(diff>=people[start])start++
  }
  return count
};