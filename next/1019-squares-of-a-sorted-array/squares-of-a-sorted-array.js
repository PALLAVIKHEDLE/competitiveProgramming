/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let squareArray=[]
    for(let num of nums){
        let val=num*num
        squareArray.push(val)
    }
    return squareArray.sort((a,b)=>a-b)
};