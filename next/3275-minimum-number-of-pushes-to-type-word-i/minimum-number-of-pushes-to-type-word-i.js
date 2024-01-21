/**
 * @param {string} word
 * @return {number}
 */
var minimumPushes = function(word) {
  let count = 1;
    const d = {};
    
    for (const i of word) {
        if (count < 9) {
            d[i] = 1;
            count++;
        } else if (count < 17) {
            d[i] = 2;
            count++;
        } else if (count < 25) {
            d[i] = 3;
            count++;
        } else {
            d[i] = 4;
            count++;
        }
    }
      // Calculate the sum of values in the object 
    return Object.values(d).reduce((acc, curr) => acc + curr, 0);
};

  