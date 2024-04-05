/**
 * @param {string} s
 * @return {string}
 */
var makeGood = function(s) {
     let stack = [];
    
    for (let char of s) {
        let top = stack[stack.length - 1];
        
        if (stack.length && (char !== top && char.toLowerCase() === top.toLowerCase())) stack.pop();
        else stack.push(char); 
    }
    
    return stack.join('');
};