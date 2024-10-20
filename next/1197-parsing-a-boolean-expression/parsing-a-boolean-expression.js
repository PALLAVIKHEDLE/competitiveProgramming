var parseBoolExpr = function(expression) {
    let stk = [];  // Stack to hold characters and operators

    // Iterate over each character in the expression
    for (let c of expression) {
        if (c !== ')' && c !== ',') {
            stk.push(c);  // Push valid characters to the stack
        } else if (c === ')') {  // When ')' is encountered, evaluate subexpression
            let exp = [];  // Array to hold boolean values of the current subexpression
            
            // Pop characters until '(' is found, collect 't' or 'f' values
            while (stk.length > 0 && stk[stk.length - 1] !== '(') {
                let t = stk.pop();
                exp.push(t === 't');
            }
            
            stk.pop();  // Pop the '(' from the stack
            
            if (stk.length > 0) {
                let t = stk.pop();  // Get the operator before '('
                let v = exp[0];  // Initialize result with the first value
                
                // Perform the corresponding logical operation
                if (t === '&') {  // AND operation
                    for (let b of exp) v = v && b;
                } else if (t === '|') {  // OR operation
                    for (let b of exp) v = v || b;
                } else {  // NOT operation
                    v = !v;
                }
                
                // Push the result back to the stack as 't' or 'f'
                stk.push(v ? 't' : 'f');
            }
        }
    }

    // Return the final result from the stack
    return stk[stk.length - 1] === 't';
};