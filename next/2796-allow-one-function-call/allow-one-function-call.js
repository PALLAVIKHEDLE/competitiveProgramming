/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function(fn) {
    let result, usedOnce=false
    return function(...args){
       if(!usedOnce){
           result=fn(...args)
           usedOnce=true
        return result
       }
    }
};

/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */
