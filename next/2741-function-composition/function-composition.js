/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
    //if there are no function to compose
   if (functions.length === 0) {
    return function(x) { return x; };
}
//If there are functions in the input array, the reduceRight method is used to iterate over the array in reverse order (from right to left). This is because function composition is typically written from right to left.
return functions.reduceRight(function(prevFn,nextFn){
    return function(x){
        return nextFn(prevFn(x))
    }
})
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */