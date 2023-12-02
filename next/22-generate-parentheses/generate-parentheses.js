/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let combinations=[]

    combinationFormed('',0,0,n, combinations)
    return combinations
};
function combinationFormed(string, openUsed, closeUsed,n, combinations){
    if(string.length==2*n)combinations.push(string)
    if(openUsed<n)combinationFormed(string+'(', openUsed+1, closeUsed,n, combinations)
    if(openUsed>closeUsed)combinationFormed(string+')', openUsed, closeUsed+1, n, combinations)

}
