/**
 * @param {Function} fn
 */
function memoize(fn) {//Define a function called memoize that takes in a function fn as its parameter.
let cache={}//Created an empty object called cache to store previously computed results
    return function(...args) {//Return a new function that takes in any number of arguments using the spread syntax.
        let key=JSON.stringify(args)//convert the arguments into a string to use as a key for the cache object

       if(cache[key]!==undefined) return cache[key] //if the key already exists in the cache object. If it does, return the cached value.
       //If the key doesn't exist in the cache, call the original function fn using apply() to pass the arguments and store the result in the cache object using the key as the property name.Finally, return the computed result.
       const result=fn.apply(this,args)
       cache[key]=result
    return result
    }
}

// const memoizedSum=memoize(function(a,b){
//     return a+b
// })

/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */