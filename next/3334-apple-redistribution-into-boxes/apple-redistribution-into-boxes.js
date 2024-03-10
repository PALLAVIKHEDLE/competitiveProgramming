/**
 * @param {number[]} apple
 * @param {number[]} capacity
 * @return {number}
 */
var minimumBoxes = function(apple, capacity) {
    let sum = 0;
    capacity.sort((a,b)=>(b-a))
    for(let i = 0;i<apple.length;i++)sum+=apple[i]
    for(let i = 0;i<capacity.length;i++){
        sum-=capacity[i]
        if(sum<=0)return i+1
    }
return 0

}