/**
 * @param {string} colors
 * @param {number[]} neededTime
 * @return {number}
 */
var minCost = function(colors, neededTime) {
    let output=0, current=0
    for(let i=1;i<colors.length;i++){
        if(colors[i]==colors[current]){
            if(neededTime[i]>neededTime[current]){
                output+=neededTime[current]
                current=i
            }else output+=neededTime[i]
        }else current=i
    }
return output    
};