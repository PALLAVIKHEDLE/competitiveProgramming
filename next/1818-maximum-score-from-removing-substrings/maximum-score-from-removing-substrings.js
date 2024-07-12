/**
 * @param {string} s
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var maximumGain = function(s, x, y) {
     // Helper function to remove specific patterns and gain points
  function removePattern(str, pattern, points) {
    let stack = [],score = 0;
    for (let char of str) {
      if (stack.length > 0 && stack[stack.length - 1] === pattern[0] && char === pattern[1]) {
        stack.pop();
        score += points;
      } else stack.push(char);
    }
    return [stack.join(''), score];
  }

  let totalScore = 0;

  // Determine which pattern to remove first based on the points
  if (x > y) {
    // Remove "ab" first
    let result = removePattern(s, 'ab', x);
    totalScore += result[1];
    // Reverse the remaining string and remove "ba"
    result = removePattern(result[0], 'ba', y);
    totalScore += result[1];
  } else {
    // Remove "ba" first
    let result = removePattern(s, 'ba', y);
    totalScore += result[1];
    // Reverse the remaining string and remove "ab"
    result = removePattern(result[0], 'ab', x);
    totalScore += result[1];
  }

  return totalScore;
};