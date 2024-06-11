/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let openStack=[];
    for(let i=0; i<s.length;i++){
        let char=s[i], peekElement=openStack[openStack.length-1]
        if(char=='('||char=='['|| char=='{')openStack.push(char)
        else if(char==')' && peekElement=='(' || char=='}' && peekElement=='{' ||char==']' && peekElement=='[')openStack.pop();
        else return false
    }
     if(openStack.length==0)return true
     else return false
};
