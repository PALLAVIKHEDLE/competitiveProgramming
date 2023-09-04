/**
 * @param {Function} fn
 * @param {number} t milliseconds
 * @return {Function}
 */
var debounce = function(fn, t) {
  let timerId=null
    return function(...args) {
      clearTimeout(timerId)
      timerId=setTimeout(()=>fn.apply(this,args),t)
      // return timerId 
    }
};

/**
 * const log = debounce(console.log, 100);
 * log('Hello'); // cancelled
 * log('Hello'); // cancelled
 * log('Hello'); // Logged at t=100ms
 */