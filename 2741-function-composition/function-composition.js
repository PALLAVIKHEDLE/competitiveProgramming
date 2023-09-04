/**
 * @param {Function[]} functions
 * @return {Function}
 */
// var compose = function(functions) {
//     if(functions.length==0){
//         return function(x){return x}
//     }else{
// 	return function(x) {
//         var result=functions[functions.length-1](x)
//         for(var i=functions.length-2;i>=0;i--){
//          result = functions[i](result);
//       }
//       return result;
//     }
//     }
// };

//reduce Right method:The compose function first checks if the input array is empty, and returns a function that simply returns its input if it is. Otherwise, it uses the reduceRight method of the array to apply the functions in reverse order. reduceRight is used instead of reduce to ensure that the functions are applied from right to left.

 var compose = function(functions) {
	if (functions.length === 0) {
    return function(x) { return x; };
  }

  return functions.reduceRight(function(prevFn, nextFn) {
    return function(x) {
      return nextFn(prevFn(x));
    };
  });

};


/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */