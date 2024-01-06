/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    let temp=[0], alt=0
    for(let i of gain){
        alt+=i
        temp.push(alt)
    }
return Math.max(...temp)    
};