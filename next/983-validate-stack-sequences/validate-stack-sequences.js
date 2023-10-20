/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function(pushed, popped) {
    let stack=[], left=0
    for(const element of pushed){
        stack.push(element)
        while(stack.length&&stack[stack.length-1]==popped[left]){
            stack.pop()
            left++
        }
    }
return pushed.length==left    
};