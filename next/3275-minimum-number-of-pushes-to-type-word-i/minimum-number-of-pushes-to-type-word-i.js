/**
 * @param {string} word
 * @return {number}
 */
var minimumPushes = function(word) {
  let count = 1; map= {};
    
    for (const i of word) {
        if (count < 9) {
            map[i] = 1;
            count++;
        } else if (count < 17) {
            map[i] = 2;
            count++;
        } else if (count < 25) {
            map[i] = 3;
            count++;
        } else {
            map[i] = 4;
            count++;
        }
    }
      // Calculate the sum of values in the object 
    return Object.values(map).reduce((acc, curr) => acc + curr, 0);
};

  