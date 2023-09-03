/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function(fn) {
    let usedOnce=false//indicationg that fn has not yet been called 
    let result
    
    return function(...args){
        if(!usedOnce){
           result=fn(...args)
           usedOnce=true
           return result  
        } 
return undefined;// when returned function is called subsequent time, it simply returns undefined

    }
};

/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */
