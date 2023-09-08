/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
// let pMap = {}, sMap = {};
// const strArray = s.split(' ');

// if (pattern.length !== strArray.length) return false;

// for (let i = 0; i < pattern.length; i++) {
//     if (!pMap[pattern[i]] && !sMap[strArray[i]]) {
//         pMap[pattern[i]] = strArray[i];
//         sMap[strArray[i]] = pattern[i];
//     }else if(pMap[pattern[i]] !== strArray[i] && sMap[strArray[i]] !== pattern[i]) return false;   
// }

// return true;
  const words = s.split(' '); //String to Array
  
  if (pattern.length !== words.length) return false;
  
  const wordToPattern = Object.create(null) 
  const patternToWord = Object.create(null) 

  for (let i = 0; i < pattern.length; i++) {
    const word = words[i];
    const char = pattern.charAt(i);
    
    if ((wordToPattern[word] && wordToPattern[word] !== char) ||
        (patternToWord[char] && patternToWord[char] !== word)) {
      return false;
    }
    
    wordToPattern[word] = char
    patternToWord[char] = word
  }
  
  return true;

}