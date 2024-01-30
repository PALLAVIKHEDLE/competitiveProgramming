/**
 * @param {string} s
 * @return {number}
 */
var minSwaps = function(s) {
    let stack=[]
    for(let i=0; i<s.length;i++){
        if(s[i]=='[')stack.push(s[i])
        else if(stack.length && s[i]==']')stack.pop(s[i])
    }
return stack.length/2
};