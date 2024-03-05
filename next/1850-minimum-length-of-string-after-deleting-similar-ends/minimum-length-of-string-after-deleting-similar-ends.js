/**
 * @param {string} s
 * @return {number}
 */
var minimumLength = function(s) {
  let i = 0, j = s.length - 1;
    while (i < j && s[i] === s[j]) {
        let char = s[i];
        
        // Move i to the right until it's no longer equal to char
        while (i <= j && s[i] === char)i++;
          
        // Move j to the left until it's no longer equal to char
        while (i <= j && s[j] === char)j--;
    }
    
    // If the string is empty or all characters are the same, return the length of the remaining string
    if (i > j) return j - i + 1;
    
    // Otherwise, there are characters left that are not part of the prefix and suffix
    // So, return the length of those characters
    return j - i + 1;   
};