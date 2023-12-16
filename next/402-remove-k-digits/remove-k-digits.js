/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function(num, k) {
    let stack=[], removed=0
    for(const ele of num){
        //will have to keep track of peak (previosly occured history)
        //whenever we find peak (next element is greater than previous one) & we have k value greater than 0. will have to pop this element nd keep poping as long as the top of the stack is greater than current element.
        while(stack.length && ele<stack[stack.length-1]&&removed<k){
            stack.pop()
            removed++
        }
        stack.push(ele)
    }
    //remove all beginning zeros
    while(removed < k) {
        stack.pop();
        removed++;
    }  
    // remove all beginning zeroes
    while(stack.length && stack[0]=='0')stack.shift()

    return stack.length?stack.join(''):'0'
};