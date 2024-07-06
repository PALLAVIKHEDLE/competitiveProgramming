/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function(s, goal) {
    if(s.length!==goal.length)return false
    let sArr=s.split('')
    for(let i=0;i<sArr.length; i++){
           // Rotate sArr
        let rotated =sArr.slice(i).concat(sArr.slice(0,i));
        console.log(rotated)
        if(rotated.join('')===goal)return true

    }
    return false
};