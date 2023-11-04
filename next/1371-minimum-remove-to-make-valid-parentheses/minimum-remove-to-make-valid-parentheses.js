/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function(s) {
    let stack=[], start=0, end=s.length,str=s.split('')
    while(start<end){
        if(s[start]=='(')stack.push(start)
        else if(s[start]==')'){
            // if out stack is empty then we will make ) as ''
            if(stack.length==0)str[start]=''
            else stack.pop()
        }
        start++  
    }
   // Remove the unmatched '('
    while (stack.length > 0) {
    let unmatchedIndex= stack.pop();
       str[unmatchedIndex] = '';
    }
return str.join('');  
};