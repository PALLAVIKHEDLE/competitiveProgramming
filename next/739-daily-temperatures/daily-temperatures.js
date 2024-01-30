/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
//stack is used to store the indexes of the elements which are larger than the current element 
 let stack=[], res=[];
 for(let i=temperatures.length-1; i>=0; i--){
     //we pop the indexes of the elements which are les than or equal to the current element
     while(temperatures[stack[stack.length-1]]<=temperatures[i])stack.pop()
     //if stack is empty, It means there is no larger element on the right 
     res[i]=!stack.length?0: stack[stack.length-1]-i
     stack.push(i)
 }
return res
};
