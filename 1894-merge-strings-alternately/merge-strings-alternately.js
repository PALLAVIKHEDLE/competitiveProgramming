/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let mergedString=[]
    let maxLength=Math.max(word1.length, word2.length)
    for(let i=0; i<maxLength;i++){
     if(word1[i])mergedString.push(word1[i])
     if(word2[i])mergedString.push(word2[i])
    }  
return mergedString.join('')
};
