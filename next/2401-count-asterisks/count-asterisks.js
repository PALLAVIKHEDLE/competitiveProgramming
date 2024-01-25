/**
 * @param {string} s
 * @return {number}
 */
var countAsterisks = function(s) {
//     let barCount=0, count=0
//     for(let str of s){
//         if(str=='|')barCount++
//         if(barCount%2==0){
//             if(str=='*')count++
//         }
//     }
//  return count   
 let notPair = true;
    let cnt = 0;
    for (const c of s) {
        if (c === '|')  notPair = !notPair;
         else if (notPair && c === '*') cnt++;
    }
    return cnt;
};