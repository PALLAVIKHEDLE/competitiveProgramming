/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
    let sortedHeight=[...heights].sort((a,b)=>a-b)
    let count=0
    
    for(let i=0; i<heights.length;i++){
        console.log(heights[i], sortedHeight[i],'logs')
        if(heights[i]!==sortedHeight[i])count++
        else console.log('count',count)
    }
    return count
};