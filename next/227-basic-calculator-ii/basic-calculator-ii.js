/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
        let stack = [],
        prevSign = '+',
        num = 0;

    for (let char of s) {
        if (char >= '0' && char <= '9') {
            num = num * 10 + parseInt(char);
        } else if (char === '+' || char === '-' || char === '*' || char === '/') {
            if (prevSign === '+') {
                stack.push(num);
            } else if (prevSign === '-') {
                stack.push(-num);
            } else if (prevSign === '*') {
                stack.push(stack.pop() * num);
            } else {
                stack.push(Math.trunc(stack.pop() / num));
            }
            prevSign = char;
            num = 0;
        }
    }

    // Handle the last number in the expression
    if (prevSign === '+') {
        stack.push(num);
    } else if (prevSign === '-') {
        stack.push(-num);
    } else if (prevSign === '*') {
        stack.push(stack.pop() * num);
    } else {
        stack.push(Math.trunc(stack.pop() / num));
    }

    return stack.reduce((acc, val) => acc + val, 0);
};