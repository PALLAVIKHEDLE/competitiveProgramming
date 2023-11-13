/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function(operations) {
  let stack=[], sum=0
  for(let i=0; i<operations.length; i++){
      if(operations[i]=='D'){
         let last= 2*stack[stack.length-1]
         stack.push(last)
      }
      else if(operations[i]=='+'){
         let first= stack[stack.length-1],
             second=stack[stack.length-2]
         stack.push(first+second)    
      }
      else if(operations[i]=='C')stack.pop()
      else stack.push(Number(operations[i]))
  }
  for(let i=0; i<stack.length;i++)sum+=stack[i]

return sum  
};