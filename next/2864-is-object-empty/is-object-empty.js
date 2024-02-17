/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty = function(obj) {
 // Check for object
  if (typeof obj === 'object') {
    return Object.keys(obj).length === 0;
  }
  
  // Check for array
  if (Array.isArray(obj)) {
    return obj.length === 0;
  }

};