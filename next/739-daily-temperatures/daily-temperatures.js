/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    if(temperatures.length==0)return []
    let stack=[], res=new Array(temperatures.length)
    for(let i=temperatures.length-1; i>=0;i--){
        while(stack.length &&  temperatures[stack[stack.length-1]]<=temperatures[i]){
            stack.pop()
        }
        res[i]=stack.length>0?stack[stack.length-1]-i:0
        stack.push(i)
    }
return res
};