/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let squareArray=[]
    for(let num of nums){
        squareArray.push(num*num)
    }
    return squareArray.sort((a,b)=>a-b)
};