/**
 * @param {string[]} words
 * @return {string}
 */
var oddString = function(words) {
     let map = {}
    for(let i=0 ; i<words.length ; i++){
        let diff = ""
        for(let j=0; j<words[i].length-1 ; j++ ){
            diff = diff + "." + String(words[i].charCodeAt(j+1)- words[i].charCodeAt(j))
        }
        if(map[diff]) map[diff].push(i)
        else map[diff]=  [i]
    }
   for (const [key, value] of Object.entries(map)) {
    if(value.length ===1) return words[value[0]]
}
};