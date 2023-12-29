/**
 * @param {string} s
 * @return {string}
 */
var removeStars = function(s) {
    let stack=[]
        for(let star of s){
            if(star=='*')stack.pop()
            else stack.push(star)
        }
    return stack.join('')
};