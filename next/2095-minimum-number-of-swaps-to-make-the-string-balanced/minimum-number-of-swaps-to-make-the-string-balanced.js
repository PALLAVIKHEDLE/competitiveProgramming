var minSwaps = function(s) {
    let stack = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] == '[') stack.push(s[i]);
        else if (stack.length && s[i] == ']') stack.pop();
    }
    // Return the smallest number of swaps needed, rounding up to an integer
    return Math.ceil(stack.length / 2);
};
