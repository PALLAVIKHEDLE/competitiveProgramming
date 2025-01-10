/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {string[]}
 */
var wordSubsets = function(words1, words2) {

  let getFreq =(word)=>{
    let currFreq = new Array(26).fill(0);
    for(let letter of word){
        currFreq[letter.charCodeAt(0)-'a'.charCodeAt(0)]++;
    }
  return currFreq;
  }  

let maxFreq = new Array(26).fill(0);
for(let word of words2){
    let wordFreq = getFreq(word);
    for(let i=0;i<26;i++){
        maxFreq[i] = Math.max(wordFreq[i],maxFreq[i]); 
    }
}
    let isUniv =(word)=>{
        let wordFreq = getFreq(word);
        for(let i=0;i<26;i++){
            if(wordFreq[i]<maxFreq[i]){
                return false;
            }
        }
        return true;
    }

return words1.filter(isUniv);

};