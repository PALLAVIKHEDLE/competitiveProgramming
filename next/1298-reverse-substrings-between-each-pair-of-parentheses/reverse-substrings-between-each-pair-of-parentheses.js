/**
 * @param {string} s
 * @return {string}
 */
var reverseParentheses = function(s) {
    let stack = [];
        
    for (let char of s) {
        if (char === '(') stack.push("(");
        else if (char === ')') {
            let rev = "";
            while (stack.length > 0 && stack[stack.length - 1] !== "(") {
                rev += stack.pop().split("").reverse().join("");
            }
            stack.pop(); // Remove the '('
            stack.push(rev);
        } else stack.push(char);
    }
    return stack.join(""); 
};