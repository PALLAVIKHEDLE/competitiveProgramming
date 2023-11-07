/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let start=0, end= numbers.length
    //first logic
    while(start<end){
        let currentSum=numbers[start]+numbers[end]
        if(currentSum==target) return [start+1, end+1]
        if(currentSum<=target)start++
        else end--
    }

    

};