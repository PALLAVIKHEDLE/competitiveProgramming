/**
 * @param {string[]} words
 * @return {number}
 */


var countPrefixSuffixPairs = function(words) {
  let count = 0, n = words.length
    
    for(let i=0;i<n;i++) {
        for(let j = i+1; j < n; j++) {
            if(words[j].startsWith(words[i]) && words[j].endsWith(words[i])) {
                count++
            }
        }
    }
    
    return count
};