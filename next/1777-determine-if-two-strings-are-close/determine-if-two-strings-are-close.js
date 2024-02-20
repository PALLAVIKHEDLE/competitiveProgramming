/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function(word1, word2) {
  let map1={}, map2={}
  if(word1.length!==word2.length)return false
  for(let word of word1){
      map1[word]=(map1[word]||0)+1
  }
  for(let char of word2){
      map2[char]=(map2[char]||0)+1
  }
  //check if the sets of character are the same
  let chars1=Object.keys(map1).sort();
  let chars2=Object.keys(map2).sort();
  if(chars1.join('')!==chars2.join(''))return false

  //check the frequencies of each character are the same
  let freq1=Object.values(map1).sort()
  let freq2=Object.values(map2).sort()
return freq1.join('') === freq2.join('');
};