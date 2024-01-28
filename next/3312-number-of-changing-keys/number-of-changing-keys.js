/**
 * @param {string} s
 * @return {number}
 */
var countKeyChanges = function(s) {
    if(!s.length) return 0
    let count=0
    let lastKey=s[0].toLowerCase()// Initialize with the lowercase of the first key

    for(let i=1; i<s.length;i++){
        let char=s[i].toLowerCase()
        if(char!==lastKey){
            count++
            lastKey=char
        }   
    }
    return count
};   