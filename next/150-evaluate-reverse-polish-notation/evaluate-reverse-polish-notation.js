/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    let stack=[], num1,num2

    let operators={
        '+':(num1, num2)=>num1+num2,
        '-':(num1, num2)=>num1-num2,
        '*':(num1, num2)=>num1*num2,
        '/':(num1, num2)=>Math.trunc(num1/num2)
    }
    for(let i=0; i<tokens.length;i++){
        if(operators[tokens[i]]){
            num2=stack.pop()
            num1=stack.pop()
            stack.push(operators[tokens[i]](num1,num2))
        }else stack.push(parseInt(tokens[i]))
    }
return stack.pop()    
};