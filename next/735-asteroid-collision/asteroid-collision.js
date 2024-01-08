/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) {
    let stack=[]
    for (let i = 0; i < asteroids.length; i++) {
        let top=stack[stack.length-1],
            curr=asteroids[i]
            
       if(!stack.length >0||top<0 ||curr>0)stack.push(curr)
       else if(-curr==top)stack.pop()
       else if(-curr>top){
        stack.pop()  
        i--   
       }
    }
    return stack
};