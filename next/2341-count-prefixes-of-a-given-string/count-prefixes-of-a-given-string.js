/**
 * @param {string[]} words
 * @param {string} s
 * @return {number}
 */
var countPrefixes = function(words, s) {
    //1st Approach
//     let count=0
//     for(let word of words){
//         if(s.startsWith(word))count++
//     }  
// return count    

    //2nd Approach
    let count=0
    for(let i=0; i<words.length;i++){
        if(words[i]===s.slice(0,words[i].length))count++
    }
return count
};